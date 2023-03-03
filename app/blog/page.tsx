import Link from "next/link";
import { getAllPost } from "../../lib/cms";

export default async function BlogPost() {
  const posts = await getAllPost()
  return (
    <div>
      {
        posts.map((post) => (
          <Link href={`/blog/${post.slug}`}>
            <div>
              <h1>{post.title}</h1>
            </div>
          </Link>
        ))
      }
    </div>
  )
}