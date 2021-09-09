import P from "prop-types";
import Image from "next/image";
import mock from './mock'

export const LogoLink = () => {
  const args = {
    text: "LOGO",
    srcImg: "/eu.jpeg",
    link: "https://github.com/ismaelrodino2",
    newTab: false,
    showText: true,
  };
  const target = args.newTab ? "_blank" : "_self"; //atenção ->args.
  const showText = args.showText? mock: "";
  return (
    <div className="flex p-4 main-container">
      <a
        target={target}
        rel="noopener noreferrer"
        href={args.link}
        className="text-5xl font-bold uppercase"
      >
        {!!args.srcImg && (
          <div className="relative w-32 h-32">
            <Image
              src={args.srcImg}
              className="rounded-full"
              layout="fill"
              alt={"teste"}
            />
          </div>
        )}
        {!args.srcImg && args.text}
      </a>
      <div className="pl-5">
        <h1 className="font-bold">{showText.blogName}</h1>
        <p>{showText.blogDescription}</p>
      </div>
    </div>
  );
};
