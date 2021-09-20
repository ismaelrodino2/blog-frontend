import { createContext, useEffect, useState } from 'react';

var theme = ['bg-white text-black', 'bg-black text-white'];
var mode = ['default', 'inverted'];

export const blogThemeContext = createContext();

export const BlogThemeProvider = ({ children }) => {
  const [blogTheme, setBlogTheme] = useState(theme[0]);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
  }, []);

  if (mode === 'inverted') {
    setBlogTheme(theme[1]);
  }

  return (
    <blogThemeContext.Provider value={{ theme: blogTheme, mode }}>
      {children}
    </blogThemeContext.Provider>
  );
};
