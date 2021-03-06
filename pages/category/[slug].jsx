import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { loadPosts } from '../../src/api/load-posts';
import { PostsTemplate } from '../../src/templates/PostsTemplate';
import PropTypes from 'prop-types';

export default function CategoryPage({ posts, setting }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>Category: .. {setting.blogName}</title>
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

export const getStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPosts({ categorySlug: ctx.params.slug });
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
CategoryPage.propTypes = {
  posts: PropTypes.array,
  setting: PropTypes.object,
};
