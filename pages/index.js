import PropTypes from 'prop-types';

import Head from 'next/head';

import { loadPosts, defaultLoadPostsVariables } from '../src/api/load-posts';

import { PostsTemplate } from '../src/templates/PostsTemplate';
export default function Home({ posts, setting, variables }) {
  return (
    <div className="teste">
      <Head>
        <button
          className="text-white bg-dark dark:bg-white dark:text-black"
          // onClick={document.querySelector('.teste').classList.add('dark')}
        >
          DarkMode
        </button>
        <title>{setting.blogName}</title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </div>
  );
}

export const getStaticProps = async () => {
  let data = null;

  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: {
        ...defaultLoadPostsVariables,
      },
    },
    revalidate: 24 * 60 * 60,
  };
};

Home.propTypes = {
  setting: PropTypes.object,
  posts: PropTypes.array,
  variables: PropTypes.object,
};
