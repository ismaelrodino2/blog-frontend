import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import PropTypes from 'prop-types';

import { Header } from '../../components/Header';

export function Base({ settings, children }) {
  return (
    <>
      <Menu
        links={settings.menuLink}
        blogName={settings.blogName}
        logo={settings.logo.url}
      />
      <div>
        <Header
          blogName={settings.blogName}
          blogDescription={settings.blogDescription}
          logo={settings.logo.url}
        />
      </div>
      <div>{children}</div>
      <div>
        <Footer footerHtml={settings.text} />
      </div>
    </>
  );
}
Base.propTypes = {
  children: PropTypes.object,
  settings: PropTypes.object,
};
