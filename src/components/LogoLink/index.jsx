import P from 'prop-types';
import Image from 'next/image';
import mock from './mock';
import PropTypes from 'prop-types';

export const LogoLink = ({ text, srcImg, link, newTab, showText }) => {
  const target = newTab ? '_blank' : '_self'; //atenção ->args.
  const showT = showText ? mock : '';
  return (
    <div
      className={`flex justify-center pb-4 main-container ${
        showT && 'pb-10 pt-10'
      }`}
    >
      <a
        target={target}
        rel="noopener noreferrer"
        href={link}
        className="text-5xl font-bold uppercase"
      >
        {!!srcImg && (
          <div className="relative w-32 h-32 border-4 border-red-600 border-solid rounded-full">
            <Image
              src={srcImg}
              className="rounded-full"
              layout="fill"
              alt={'teste'}
            />
          </div>
        )}
        {!srcImg && text}
      </a>
      <div className="flex flex-col self-center pl-5 dark:text-white">
        <h1 className="font-bold ">{showT.blogName}</h1>
        <p className="">{showT.blogDescription}</p>
      </div>
    </div>
  );
};
LogoLink.propTypes = {
  text: PropTypes.string,
  srcImg: PropTypes.string,
  link: PropTypes.string,
  newTab: PropTypes.bool,
  showText: PropTypes.bool,
};
