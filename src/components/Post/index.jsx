import { ArticleHeader } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import PropTypes from 'prop-types';

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
Post.propTypes = {
  post: PropTypes.array,
};
