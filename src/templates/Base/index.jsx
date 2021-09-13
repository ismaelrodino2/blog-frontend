import { Menu } from '../../components/Menu';
import { Post } from '../../components/Post';
import { Footer } from '../../components/Footer';

import mock from './mock';
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
