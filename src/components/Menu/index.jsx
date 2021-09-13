import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import { useState } from 'react';
import { LogoLink } from '../LogoLink';
import { MenuLink } from '../MenuLink';

import mock from './mock';

export function Menu({ links, blogName, logo}) {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleOpenCloseMenu = (event) => {
    event.preventDefault();
    setMenuVisible((v) => !v);
  };
  return (
    <>
      <a
        href="#"
        onClick={handleOpenCloseMenu}
        aria-label="Open or close menu"
        title="Open or close menu"
        className={`fixed z-20 w-12 h-12 text-red-600 transition duration-500 ease-in-out transform bg-black ${
          menuVisible ? 'translate-x-40' : 'translate-x-5 translate-y-5'
        }`}
      >
        {menuVisible && <CloseIcon aria-label="Close menu" />}
        {!menuVisible && <MenuIcon aria-label="Open menu" />}
      </a>
      <div
        className={`fixed top-0 inline-flex flex-col h-screen transition duration-500 ease-in-out transform bg-black z-10  ${
          menuVisible ? 'translate-x-0 overflow-y-auto' : '-translate-x-60'
        }`}
      >
        <nav className="py-12">
          <LogoLink
            link="/"
            text={blogName}
            srcImg={logo}
            newTab={false}
            showText={false}
          />
          {links.map((link) => (
            <MenuLink
              key={link.id}
              link={link.link}
              newTab={link.newTab}
              text={link.text}
            />
          ))}
        </nav>
      </div>
    </>
  );
}
