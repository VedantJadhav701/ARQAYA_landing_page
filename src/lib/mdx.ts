import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_PATH = path.join(process.cwd(), "content");

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author: string;
  authorImage?: string;
  image: string;
  readTime?: string;
  slug: string;
  featured?: boolean;
}

export interface Post {
  frontmatter: PostFrontmatter;
  content: string;
}

/**
 * Calculates estimated read time for content
 */
function calculateReadTime(content: string): string {
  const wordsPerMinute = 225;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Gets all posts from a specific subdirectory in /content
 */
export function getAllPosts(type: "insights" | "research" | "case-studies"): PostFrontmatter[] {
  const directory = path.join(CONTENT_PATH, type);
  
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs.readdirSync(directory);

  const posts = files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(directory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const slug = file.replace(/\.mdx?$/, "");

      return {
        ...data,
        slug,
        readTime: calculateReadTime(content),
      } as PostFrontmatter;
    })
    .sort((a, b) => (new Date(b.date).getTime() > new Date(a.date).getTime() ? 1 : -1));

  return posts;
}

/**
 * Gets a single post by slug and type
 */
export function getPostBySlug(
  type: "insights" | "research" | "case-studies",
  slug: string
): Post | null {
  const directory = path.join(CONTENT_PATH, type);
  const mdxPath = path.join(directory, `${slug}.mdx`);
  const mdPath = path.join(directory, `${slug}.md`);
  
  let filePath = "";
  if (fs.existsSync(mdxPath)) filePath = mdxPath;
  else if (fs.existsSync(mdPath)) filePath = mdPath;
  else return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    frontmatter: {
      ...data,
      slug,
      readTime: calculateReadTime(content),
    } as PostFrontmatter,
    content,
  };
}
