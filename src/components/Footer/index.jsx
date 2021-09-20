import PropTypes from 'prop-types';
import { useContext } from 'react';
import { blogThemeContext } from '../../contexts/BlogThemeContext';

export const Footer = ({ footerHtml }) => {
  return (
    <div>
      <div
        className={'flex justify-center py-6 pt-10 main-container'}
        dangerouslySetInnerHTML={{
          __html: footerHtml,
        }}
      ></div>
    </div>
  );
};

Footer.propTypes = {
  footerHtml: PropTypes.string,
};
