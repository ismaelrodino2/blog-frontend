import Image from 'next/image';
import { ArticleMeta } from '../ArticleMeta';

export function ArticleHeader({
  author,
  categories,
  title,
  excerpt,
  id,
  cover,
  createdAt,
}) {
  return (
    <div className="main-container">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-5 text-2xl">{excerpt}</p>
      <div className="relative w-full h-96">
        <Image layout="fill" src={cover.url} alt={cover.alternativeText} />
      </div>
      <div>
        <ArticleMeta categories={categories} author={author} />
      </div>
    </div>
  );
}
