"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AdminBlogPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setMessage("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/blog/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || "Failed to create post");
            }

            setStatus("success");
            setMessage("Blog post created successfully! It will appear after the next deployment.");
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            setStatus("error");
            setMessage(error instanceof Error ? error.message : "Something went wrong");
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl">Create New Blog Post</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="password">Admin Password</Label>
                            <Input id="password" name="password" type="password" required />
                            <p className="text-xs text-muted-foreground">Required to authorize the GitHub commit.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" name="title" placeholder="Blog Post Title" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="slug">Slug (URL friendly)</Label>
                                <Input id="slug" name="slug" placeholder="my-blog-post" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="author">Author</Label>
                                <Input id="author" name="author" placeholder="John Doe" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Input id="category" name="category" placeholder="Technology" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="excerpt">Excerpt</Label>
                            <Textarea id="excerpt" name="excerpt" placeholder="Short summary..." required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="image">Image Path</Label>
                            <Input id="image" name="image" defaultValue="/images/blog-tech.png" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="readTime">Read Time</Label>
                            <Input id="readTime" name="readTime" defaultValue="5 min read" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="content">Content (Markdown)</Label>
                            <Textarea
                                id="content"
                                name="content"
                                placeholder="# Heading&#10;&#10;Write your content in markdown..."
                                className="min-h-[300px] font-mono"
                                required
                            />
                        </div>

                        {status === "error" && (
                            <Alert variant="destructive">
                                <AlertDescription>{message}</AlertDescription>
                            </Alert>
                        )}

                        {status === "success" && (
                            <Alert className="bg-green-50 text-green-900 border-green-200">
                                <AlertDescription>{message}</AlertDescription>
                            </Alert>
                        )}

                        <Button type="submit" className="w-full" disabled={status === "loading"}>
                            {status === "loading" ? "Creating..." : "Create Post"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
