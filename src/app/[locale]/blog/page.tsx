import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSortedPostsData } from "@/lib/blog";

export default function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Insights</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Stay updated with the latest news, technological developments, and expert opinions from the marine electrical industry.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none shadow-md">
                                <div className="relative h-56 w-full">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <Badge className="absolute top-4 right-4 bg-marine-blue hover:bg-marine-blue/90">
                                        {post.category}
                                    </Badge>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center">
                                            <User className="h-4 w-4 mr-1" />
                                            {post.author}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl font-heading leading-tight hover:text-marine-blue transition-colors cursor-pointer">
                                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link href={`/blog/${post.id}`} className="block w-full">
                                        <Button variant="link" className="text-marine-blue p-0 h-auto font-semibold group">
                                            Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl p-8 md:p-12 text-center shadow-sm">
                        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Subscribe to Our Newsletter</h2>
                        <p className="text-muted-foreground mb-8">
                            Get the latest updates and industry insights delivered directly to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-marine-blue focus:border-transparent"
                                required
                            />
                            <Button type="submit" className="bg-marine-blue hover:bg-marine-blue/90 text-white">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
