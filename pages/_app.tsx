import * as React from 'react';
import App from 'next/app';

// general css files
import '../embedded/css/normalize.css';
import '../embedded/css/general.css';
// font related css files
import '../embedded/css/inter.css';

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}
