import fm from "front-matter";

const posts = import.meta.glob("../../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const parsedPosts = Object.entries(posts).map(([path, raw]) => {
  const { attributes, body } = fm(raw);

  const slug = path.split("/").pop().replace(".md", "");

  return {
    slug,
    content: body,
    ...attributes,
  };
})
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const getRecentPosts = (limit = 3) => {
  return [...parsedPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export const getRelatedPosts = (currentPost, limit = 3) => {
  if (!currentPost?.tags) return [];

  const currentTags = currentPost.tags;

  return parsedPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      const postTags = post.tags || [];

      // score = number of shared tags
      const score = postTags.filter((tag) =>
        currentTags.includes(tag)
      ).length;

      return { ...post, score };
    })
    .filter((post) => post.score > 0) // only actually related ones
    .sort((a, b) => b.score - a.score) // most related first
    .slice(0, limit);
};