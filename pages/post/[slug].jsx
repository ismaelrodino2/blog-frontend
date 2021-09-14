import Head from 'next/head';
import PropTypes from 'prop-types';

import { useRouter } from 'next/dist/client/router';
import { loadPosts } from '../../src/api/load-posts';
import { PostTemplate } from '../../src/templates/PostTemplate';

export default function PostPage({ posts, setting }) {
  const router = useRouter();

  // eslint-disable-next-line no-undef
  if (router.isFallback) {
    return <h1>Loading</h1>;
  }

  const post = posts[0];

  return (
    <>
      <Head>
        <title>
          {post.title} - {setting.blogName}
        </title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostTemplate post={posts[0]} settings={setting} />;
    </>
  );
}

export const getStaticPaths = async () => {
  let data = null;
  let paths = [];

  try {
    data = await loadPosts();
    paths = data.posts.map((post) => ({ params: { slug: post.slug } }));
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};
//--//--//--
export const getStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPosts({ postSlug: ctx.params.slug });
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

PostPage.propTypes = {
  setting: PropTypes.object,
  posts: PropTypes.array,
};
