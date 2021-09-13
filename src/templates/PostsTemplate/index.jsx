import { Base } from '../Base';
import { PostGrid } from '../../components/PostGrid';
import mock from './mock';

export function PostsTemplate() {
  return (
    <>
      <div>
        <Base settings={mock.settings}>
          <PostGrid posts={mock.posts} />
        </Base>
      </div>
    </>
  );
}
