import { ArticleHeader } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import mock from './mock';

export function Post({ post }) {
  return (
    <div>
      <ArticleHeader
        author={post.author}
        categories={post.categories}
        title={post.title}
        excerpt={post.excerpt}
        id={post.id}
        cover={post.cover}
        createdAt={post.createdAt}
      />
      <HtmlContent html={post.content} />
    </div>
  );
}
