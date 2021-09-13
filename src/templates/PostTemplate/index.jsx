import { Post } from '../../components/Post';
import { Base } from '../Base';
import { PostTags } from '../../components/PostTags';
import mock from './mock';

export function PostTemplate() {
  return (
    <>
      <div>
        <Base settings={mock.settings}>
          <Post post={mock.post} />
          <PostTags tags={mock.post.tags} />
        </Base>
      </div>
    </>
  );
}
