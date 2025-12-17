import BlogPost, { type BlogPostProps } from "../items/BlogPost";

interface BlogFeedProps {
  title: string;
  posts: BlogPostProps[];
}

const BlogFeed = ({ title, posts }: BlogFeedProps) => {
  return (
    <section className="mt-5 flex min-h-[80vh] w-full flex-col place-content-center place-items-center p-[2%] max-lg:p-3">
      <h3 className="reveal-up text-center text-4xl font-medium max-md:text-2xl">
        {title}
      </h3>

      <div className="reveal-up mt-10 flex flex-wrap place-content-center gap-10 max-lg:flex-col">
        {posts.map(({ title, ...rest }: BlogPostProps, index) => (
          <BlogPost key={index + title} title={title} {...rest} />
        ))}
      </div>
    </section>
  );
};

export default BlogFeed;
