import { Base } from '../Base';
import { PostGrid } from '../../components/PostGrid';
import mock from './mock';
import PropTypes from 'prop-types';

export function PostsTemplate({ settings, posts }) {
  return (
    <>
      <div>
        <Base settings={settings}>
          <PostGrid posts={posts} />
        </Base>
      </div>
    </>
  );
}
PostsTemplate.propTypes = {
  posts: PropTypes.array,
  settings: PropTypes.object,
};
