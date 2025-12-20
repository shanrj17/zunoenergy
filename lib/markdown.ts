import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const contentDirectory = path.join(process.cwd(), "content/learn")

export interface Post {
    slug: string
    title: string
    description: string
    date: string
    category: string
    contentHtml?: string
    content?: string
}

export function getPostSlugs(category: string) {
    const dir = path.join(contentDirectory, category)
    if (!fs.existsSync(dir)) return []
    return fs.readdirSync(dir).filter(file => file.endsWith(".md"))
}

export function getPostBySlug(category: string, slug: string, fields: string[] = []): Post {
    // Check if slug already has .md extension or not
    const realSlug = slug.replace(/\.md$/, "")
    const fullPath = path.join(contentDirectory, category, `${realSlug}.md`)

    if (!fs.existsSync(fullPath)) {
        throw new Error(`File not found: ${fullPath}`)
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const post: any = {}

    // Ensure minimal data
    post.slug = realSlug
    post.content = content

    fields.forEach((field) => {
        if (field === "slug") {
            post[field] = realSlug
        }
        if (field === "content") {
            post[field] = content
        }
        if (data[field]) {
            post[field] = data[field]
        }
    })

    return post as Post
}

export function getAllPosts(category: string, fields: string[] = []): Post[] {
    const slugs = getPostSlugs(category)
    const posts = slugs
        .map((slug) => getPostBySlug(category, slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}

export async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).process(markdown)
    return result.toString()
}
