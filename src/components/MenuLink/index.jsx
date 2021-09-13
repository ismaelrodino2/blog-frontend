import PropTypes from 'prop-types';

export const MenuLink = ({ link, newTab, text }) => {
  const target = newTab ? '_blank' : '_self';

  return (
    <div className="flex ">
      <a
        href={link}
        target={target}
        className="pr-24 m-2 text-white border-r-4 border-black hover:border-red-600 hover:text-green-700"
      >
        {text}
      </a>
    </div>
  );
};
MenuLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  newTab: PropTypes.bool,
};
