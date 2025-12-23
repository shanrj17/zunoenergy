import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeStringify from "rehype-stringify"
// @ts-ignore
import rehypeAddClasses from 'rehype-add-classes'

const contentDirectory = path.join(process.cwd(), "content/learn")

export interface Post {
    slug: string
    title: string
    description: string
    date: string
    category: string
    image?: string
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
    const result = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSlug as any)
        // @ts-ignore
        .use(rehypeAddClasses, {
            h2: 'editorial-h2'
        })
        .use(rehypeAutolinkHeadings as any, {
            behavior: 'wrap'
        })
        .use(rehypeStringify)
        .process(markdown)
    return result.toString()
}

export async function getHeadings(markdown: string) {
    const headingLines = markdown.split('\n').filter(line => line.match(/^##\s/))
    return headingLines.map(raw => {
        const text = raw.replace(/^##\s/, '').trim()
        const slug = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
        return { text, slug }
    })
}
