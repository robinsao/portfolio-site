import { formatUrlSearchParams, throwIfHttpResponseError } from "@/lib/utils";
import { Blog, BlogsSchema } from "@/schemas/blog.schema";

async function fetchPublishedBlogs(
  params: Record<string, string>,
): Promise<Blog[]> {
  if (params.fields == null) params.fields = "";
  if (!params.fields.includes("publishStatus"))
    params.fields += ",publishStatus";

  const url = `${process.env.STRAPI_BASE_URL}/api/blogs?${formatUrlSearchParams(params)}`;

  const response = await fetch(url, {
    headers: new Headers({
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
    }),
    method: "GET",
  });

  throwIfHttpResponseError(response);
  const responseJson = (await response.json()) as { data: Blog[] };

  return BlogsSchema.parse(responseJson.data).filter(
    (b) => b.publishStatus === "published",
  );
}

export { fetchPublishedBlogs };
