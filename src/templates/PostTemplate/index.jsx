import { Post } from '../../components/Post';
import { Base } from '../Base';
import { PostTags } from '../../components/PostTags';
import PropTypes from 'prop-types';
import { Comments } from '../../components/Comments';

export function PostTemplate({ settings, post }) {
  return (
    <>
      <div>
        <Base settings={settings}>
          <Post post={post} />
          <PostTags tags={post.tags} />
          <Comments
            title={post.title}
            slug={post.slug}
            id={post.id}
            allowComments={post.allowComments}
          />
        </Base>
      </div>
    </>
  );
}
PostTemplate.propTypes = {
  post: PropTypes.array,
  settings: PropTypes.object,
};
