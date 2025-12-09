import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPostData, getSortedPostsData } from "@/lib/blog";
import { marked } from 'marked';

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        id: post.id,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const post = getPostData(resolvedParams.id);

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                <Link href="/blog">
                    <Button>Return to Blog</Button>
                </Link>
            </div>
        );
    }

    const contentHtml = await marked(post.content);

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Image */}
            <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-12 text-white">
                    <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 w-fit transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                    <Badge className="w-fit bg-marine-blue text-white mb-4 border-none">{post.category}</Badge>
                    <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4 max-w-4xl">{post.title}</h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-200">
                        <div className="flex items-center">
                            <User className="mr-2 h-4 w-4" />
                            {post.author}
                        </div>
                        <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            {post.readTime}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8">
                        <div
                            className="prose prose-lg max-w-none text-slate-700 prose-headings:font-heading prose-headings:text-slate-900 prose-a:text-marine-blue"
                            dangerouslySetInnerHTML={{ __html: contentHtml }}
                        />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                            <h3 className="font-bold text-lg mb-4">Share this article</h3>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="rounded-full hover:text-marine-blue hover:border-marine-blue">
                                    <Share2 className="h-4 w-4" />
                                </Button>
                                {/* Add social media share buttons here if needed */}
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                            <h3 className="font-bold text-lg mb-4">Related Topics</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Marine", "Electrical", "Technology", "Safety", "Green Energy"].map(tag => (
                                    <Badge key={tag} variant="secondary" className="bg-white hover:bg-slate-100 cursor-pointer text-slate-600">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
