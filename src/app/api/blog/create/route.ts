import { NextResponse } from "next/server";
import { Octokit } from "octokit";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { title, slug, author, category, excerpt, image, readTime, content, password } = data;

        // Verify password
        if (password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json(
                { error: "Invalid password" },
                { status: 401 }
            );
        }

        // Verify GitHub Token exists
        if (!process.env.GITHUB_TOKEN) {
            return NextResponse.json(
                { error: "Server configuration error: GITHUB_TOKEN is missing" },
                { status: 500 }
            );
        }

        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN,
        });

        // 1. Create content with Frontmatter
        const fileContent = `---
title: "${title.replace(/"/g, '\\"')}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
image: "${image}"
category: "${category}"
date: "${new Date().toISOString().split('T')[0]}"
author: "${author}"
readTime: "${readTime}"
---

${content}
`;

        // 2. Encode to Base64
        const contentEncoded = Buffer.from(fileContent).toString("base64");

        // 3. Push to GitHub
        const owner = process.env.GITHUB_REPO_OWNER || "Sevketcan";
        const repo = process.env.GITHUB_REPO_NAME || "vimarinenew";
        const path = `content/blog/${slug}.md`;

        // Check if file exists to get SHA (for update) or just create new
        // For simplicity, we assume new file. If it exists, this will fail unless we provide SHA.
        // We'll try to create it.

        try {
            await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
                owner,
                repo,
                path,
                message: `Add new blog post: ${title}`,
                committer: {
                    name: author,
                    email: "admin@vimarine.com"
                },
                content: contentEncoded,
            });

            return NextResponse.json({ success: true });
        } catch (error: any) {
            console.error("GitHub API Error:", error);
            if (error.status === 422) {
                return NextResponse.json(
                    { error: "File already exists or invalid data" },
                    { status: 422 }
                );
            }
            throw error;
        }

    } catch (error) {
        console.error("Blog creation error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
