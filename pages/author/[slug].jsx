import Head from 'next/head';
import PropTypes from 'prop-types';

import { useRouter } from 'next/dist/client/router';
import { loadPosts } from '../../src/api/load-posts';
import { PostsTemplate } from '../../src/templates/PostsTemplate';

export default function AuthorPage({ posts, setting }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading</h1>;
  }

  const post = posts[0];

  return (
    <>
      <Head>
        <title>author: dfd</title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} settings={setting} />
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
//--//--//--
export const getStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPosts({ authorSlug: ctx.params.slug });
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

AuthorPage.propTypes = {
  setting: PropTypes.object,
  posts: PropTypes.array,
};
