import Link from 'next/link';
import mock from './mock';
import PropTypes from 'prop-types';

export function PostTags({ tags }) {
  return (
    <div className="flex py-5 main-container">
      <p className="">tags: </p>
      {tags.map((tag) => {
        return (
          <Link key={tag.id} href={`/tag/${tag.slug}`}>
            <a className="px-2 text-red-600">
              {tag.displayName}
              {tags.length > 1 && ', '}
            </a>
          </Link>
        );
      })}
    </div>
  );
}
PostTags.propTypes = {
  tags: PropTypes.array,
};
