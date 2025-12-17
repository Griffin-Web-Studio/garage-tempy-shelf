export interface BlogPostProps {
  title: string;
  excerpt: string;
  img: string;
  url: string;
}

const BlogPost = ({ title, excerpt, img, url }: BlogPostProps) => {
  return (
    <a
      href={url}
      className="flex h-100 w-100 flex-col gap-4 overflow-clip rounded-lg p-4 max-lg:w-75"
    >
      <div className="h-62.5 w-full overflow-hidden rounded-md">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.04]"
        />
      </div>
      <h3 className="mt-2 text-2xl font-semibold max-md:text-xl">{title}</h3>
      <p className="text-gray-400">{excerpt}</p>
      <span>
        <span>Learn more</span> <i className="bi bi-arrow-right"></i>
      </span>
    </a>
  );
};

export default BlogPost;
