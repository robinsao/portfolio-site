import { cn } from "@/lib/utils";
import { Blog } from "@/schemas/blog.schema";
import { fetchPublishedBlogs } from "@/server-actions/strapi";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

async function BlogItem({ blog }: { blog: Blog }) {
  const createdAtDateObj = new Date(blog.createdAt!);
  const createdAtFormatted = `${createdAtDateObj.getDate()}/${createdAtDateObj.getMonth()}/${createdAtDateObj.getFullYear() % 100}`;

  return (
    <Link href="https://blog.robinsao.uk" target="_blank">
      <article
        className="group w-full grid grid-cols-[1fr_2fr] overflow-clip grid-rows-1 h-60 gap-x-8 border-2 shadow-xl rounded-2xl
      hover:shadow-2xl hover:-translate-y-3"
      >
        <div className="relative">
          <Image
            src={`${process.env.STRAPI_BASE_URL}${blog.cover?.url}` || ""}
            alt={blog.cover!.alternativeText}
            fill
            className="w-full group-hover:scale-110 transition-transform duration-300 object-cover"
          />
        </div>
        <div className="relative flex flex-col justify-center items-start pr-8 py-4 text-foreground">
          <h2 className="text-2xl font-bold">{blog.title}</h2>
          <h3 className="opacity-50 mb-4">{createdAtFormatted}</h3>
          <p className="text-lg">{blog.excerpt}</p>
          <FaArrowRight className="absolute bottom-4 right-4 text-2xl" />
        </div>
      </article>
    </Link>
  );
}

export const revalidate = 300;

export default async function RecentBlogsSection({
  className,
}: {
  className?: string;
}) {
  const blogs = await fetchPublishedBlogs({
    fields: "slug,title,content,createdAt,publishStatus,excerpt",
    populate: "*",
    "filters[publishStatus][$eq]": "published",
    sort: "createdAt:desc,slug:desc",
    "pagination[pageSize]": "2",
    "pagination[page]": "1",
  });

  return (
    <div
      id="recent-blogs"
      className={cn(
        "snap-start min-h-screen flex flex-col items-center",
        className,
      )}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center text-shadow-lg mt-48 mb-12 w-full">
        Recent Blogs
      </h1>

      <ul
        className="w-5/6 max-w-6xl 
          [&_article]:transition-[box-shadow,translate,background-color,color] [&_a]:duration-700 [&_img]:transition-transform"
      >
        <li className="w-full">
          {blogs.map((b) => (
            <BlogItem key={b.slug} blog={b} />
          ))}
        </li>
      </ul>
    </div>
  );
}
