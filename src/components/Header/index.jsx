import PropTypes from 'prop-types';

import { LogoLink } from '../LogoLink';
import mock from './mock';
export function Header({ blogName, blogDescription, logo }) {
  return (
    <div className="main-container">
      <div>
        <LogoLink
          link="/"
          srcImg={logo}
          text={`${blogName} = ${blogDescription}`}
          showText={true}
        />
      </div>
    </div>
  );
}

Header.propTypes = {
  blogName: PropTypes.string,
  blogDescription: PropTypes.string,
  logo: PropTypes.object,
};
