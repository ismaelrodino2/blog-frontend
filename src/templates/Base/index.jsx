import { Menu } from '../../components/Menu';
import { Post } from '../../components/Post';
import { Footer } from '../../components/Footer';

import mock from './mock';
import { Header } from '../../components/Header';

export function Base({ children }) {
  return (
    <>
      <Menu
        links={mock.settings.menuLink}
        blogName={mock.settings.blogName}
        logo={mock.settings.logo}
      />
      <div>
        <Header />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
}
