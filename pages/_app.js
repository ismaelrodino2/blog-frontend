import '../styles/globals.css';
import PropTypes from 'prop-types';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.AppProps,
  pageProps: PropTypes.AppProps,
};
