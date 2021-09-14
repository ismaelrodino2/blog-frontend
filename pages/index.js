import PropTypes from 'prop-types';

import Head from 'next/head';

import { loadPosts } from '../src/api/load-posts';

import { PostsTemplate } from '../src/templates/PostsTemplate';
export default function Home({ posts, setting }) {
  return (
    <>
      <Head>
        <title>{setting.blogName}</title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} setting={setting} />
    </>
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
    },
    revalidate: 24 * 60 * 60,
  };
};

Home.propTypes = {
  setting: PropTypes.object,
  posts: PropTypes.array,
};
