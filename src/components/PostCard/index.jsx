import { Heading } from '@styled-icons/boxicons-regular';
import Image from 'next/image';
import mock from './mock';
import PropTypes from 'prop-types';

export function PostCard({ slug, cover, excerpt, title }) {
  return (
    <div>
      <a href={`/post/${slug}`}>
        <div className="relative w-full h-60">
          <Image layout="fill" src={cover.url} alt="teste" />
        </div>
      </a>
      <a href={`/post/${slug}`}>
        <h1 className="py-3 text-3xl font-bold hover:text-red-600">{title}</h1>
      </a>
      <p>{excerpt}</p>
    </div>
  );
}
PostCard.propTypes = {
  slug: PropTypes.string,
  cover: PropTypes.object,
  excerpt: PropTypes.string,
  title: PropTypes.string,
};
