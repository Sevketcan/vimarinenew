import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPost = {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    date: string;
    author: string;
    readTime: string;
};

export function getSortedPostsData(): Omit<BlogPost, 'content'>[] {
    // Get file names under /content/blog
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as Omit<BlogPost, 'id' | 'content'>),
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostData(id: string): BlogPost | null {
    const fullPath = path.join(postsDirectory, `${id}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
        id,
        content: matterResult.content,
        ...(matterResult.data as Omit<BlogPost, 'id' | 'content'>),
    };
}
