import { Post } from '../../components/Post';
import { Base } from '../Base';
import { PostTags } from '../../components/PostTags';
import mock from './mock';
import PropTypes from 'prop-types';

export function PostTemplate({ settings, post }) {
  return (
    <>
      <div>
        <Base settings={settings}>
          <Post post={post} />
          <PostTags tags={post.tags} />
        </Base>
      </div>
    </>
  );
}
PostTemplate.propTypes = {
  post: PropTypes.array,
  settings: PropTypes.object,
};
