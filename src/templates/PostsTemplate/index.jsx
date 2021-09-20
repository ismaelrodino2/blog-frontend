import { Base } from '../Base';
import { PostGrid } from '../../components/PostGrid';
import mock from './mock';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { loadPosts } from '../../api/load-posts';
export function PostsTemplate({ settings, posts = [], variables }) {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);
    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };
    const morePosts = await loadPosts(newVariables);
    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setNoMorePosts(true);
      return;
    }
    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts((p) => [...p, ...morePosts.posts]);
  };

  return (
    <>
      <div className="dark:bg-black dark:text-white">
        <Base settings={settings}>
          <PostGrid posts={statePosts} />
          <div className="flex justify-center py-5 main-container">
            <button
              className="p-2 text-white bg-black dark:text-black dark:bg-white rounded-xl"
              onClick={handleLoadMorePosts}
              disabled={buttonDisabled}
            >
              {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
            </button>
          </div>
        </Base>
      </div>
    </>
  );
}
PostsTemplate.propTypes = {
  posts: PropTypes.array,
  settings: PropTypes.object,
  variables: PropTypes.object,
};
