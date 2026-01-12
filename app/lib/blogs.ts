import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export async function getBlogPost(id: string) {
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    id,
    title: data.title as string,
    date: data.date as string,
    content,
  };
}