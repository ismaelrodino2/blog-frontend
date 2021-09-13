import { PostCard } from '../PostCard';
import mock from '../PostCard/mock';

export function PostGrid({ posts }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row main-container">
      {posts.map((post) => {
        return (
          <span key={post.id} className="md:w-1/3">
            <PostCard
              slug={post.slug}
              cover={post.cover}
              excerpt={post.excerpt}
              title={post.title}
            />
          </span>
        );
      })}
    </div>
  );
}
