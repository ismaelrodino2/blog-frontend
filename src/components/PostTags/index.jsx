import Link from 'next/link';
import mock from './mock';
export function PostTags() {
  return (
    <div className="flex">
      <p className="">tags: </p>
      {mock.tags.map((tag) => {
        return (
          <Link key={tag.id} href={`/tag/${tag.slug}`}>
            <a className="px-2 text-red-600">
              {tag.displayName}
              {mock.tags.length > 1 && ', '}
            </a>
          </Link>
        );
      })}
    </div>
  );
}
