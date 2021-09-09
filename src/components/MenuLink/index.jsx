export const MenuLink = () => {
  const args = {
    children: 'MenuLink',
    link: 'https://www.google.com.br/',
    newTab: false
  };
  const target = args.newTab ? '_blank' : '_self';

  return (
    <div className="bg-black h-full flex flex-col">
      <a
        href={args.link}
        target={target}
        className="text-white m-5 border-r-4 border-black hover:border-red-600 hover:text-green-700 max-w-md"
      >
        {args.children}

      </a>
      <a
        href={args.link}
        target={target}
        className="text-white m-5 border-r-4 border-black hover:border-red-600 hover:text-green-700 max-w-md"
      >
        {args.children}

      </a>      <a
        href={args.link}
        target={target}
        className="text-white m-5 border-r-4 border-black hover:border-red-600 hover:text-green-700 max-w-md"
      >
        {args.children}

      </a>
    </div>
  );
};
