import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// This would typically come from a database or CMS
const posts = [
    {
        id: "1",
        title: "The Future of Marine Automation: Trends to Watch in 2025",
        excerpt: "Explore the latest advancements in autonomous shipping, AI-driven diagnostics, and remote monitoring systems that are reshaping the maritime industry.",
        content: `
            <p className="mb-4">The maritime industry is on the brink of a technological revolution. As we approach 2025, automation is no longer just a buzzword but a reality that is transforming how ships are operated, maintained, and managed.</p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Autonomous Shipping</h3>
            <p className="mb-4">Autonomous ships are set to redefine logistics. With advanced sensors and AI algorithms, these vessels can navigate complex routes with minimal human intervention, increasing safety and efficiency.</p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">AI-Driven Diagnostics</h3>
            <p className="mb-4">Predictive maintenance powered by AI is becoming the standard. By analyzing data from various sensors, onboard systems can predict failures before they happen, saving millions in downtime and repair costs.</p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Remote Monitoring</h3>
            <p className="mb-4">Real-time remote monitoring allows onshore teams to assist crews in troubleshooting complex issues, ensuring that expert advice is always available, regardless of the vessel's location.</p>
        `,
        image: "/images/blog-tech.png",
        category: "Technology",
        date: "October 15, 2025",
        author: "Engin Yılmaz",
        readTime: "5 min read"
    },
    {
        id: "2",
        title: "Navigating the Green Transition: Electrical Solutions for Sustainable Shipping",
        excerpt: "How retrofitting vessels with energy-efficient electrical systems and hybrid power solutions can help meet new environmental regulations.",
        content: `
          <p className="mb-4">With stricter environmental regulations coming into force, the shipping industry is under pressure to reduce its carbon footprint. Electrical solutions are at the forefront of this green transition.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Hybrid Power Systems</h3>
          <p className="mb-4">Hybrid systems that combine traditional engines with battery storage are proving to be a game-changer. They allow vessels to operate more efficiently, reducing fuel consumption and emissions.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Shore Power Connectivity</h3>
          <p className="mb-4">Connecting to shore power while at port (cold ironing) eliminates emissions from auxiliary engines. We are seeing a surge in demand for retrofitting vessels with shore power connection systems.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Energy Efficient Lighting and Motors</h3>
          <p className="mb-4">Simple upgrades like switching to LED lighting and high-efficiency motors can have a significant cumulative impact on a vessel's overall energy consumption.</p>
        `,
        image: "/images/blog-green.png",
        category: "Sustainability",
        date: "September 28, 2025",
        author: "Ayşe Demir",
        readTime: "4 min read"
    },
    {
        id: "3",
        title: "Essential Electrical Maintenance Checklist for Dry Docking",
        excerpt: "A comprehensive guide to preparing your vessel's electrical systems for dry dock inspections and maintenance to ensure safety and compliance.",
        content: `
          <p className="mb-4">Dry docking is a critical period for any vessel. It's the perfect opportunity to perform deep maintenance on electrical systems that is otherwise impossible while at sea.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Main Switchboard Inspection</h3>
          <p className="mb-4">A thorough cleaning and tightening of connections in the main switchboard is essential using thermal imaging to detect hotspots.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Generator Maintenance</h3>
          <p className="mb-4">Overhauling generators and testing their protection systems ensures reliability for the next sailing period.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Emergency Systems Test</h3>
          <p className="mb-4">Testing emergency lighting, alarms, and backup power sources is non-negotiable for safety compliance.</p>
        `,
        image: "/images/blog-safety.png",
        category: "Maintenance",
        date: "September 10, 2025",
        author: "Mehmet Kaya",
        readTime: "6 min read"
    },
];

export async function generateStaticParams() {
    return posts.map((post) => ({
        id: post.id,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    // Await params first
    const resolvedParams = await params;
    const post = posts.find(p => p.id === resolvedParams.id);

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
                            dangerouslySetInnerHTML={{ __html: post.content }}
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
