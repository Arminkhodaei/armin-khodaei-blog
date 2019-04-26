import React from 'react';
import Head from 'next/head';

// general css files
import '../../embedded/css/normalize.css';
import '../../embedded/css/general.css';
// font related css files
import '../../embedded/css/inter.css';
// UI framework Bulma
import 'bulma/css/bulma.css';

export default () => {
  return (
    <div className="header">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <div>
              <p className="title is-4 is-spaced">Armin Khodaei</p>
              <p className="subtitle is-7">
                Software engineer, developer, and AI enthusiast...
              </p>
            </div>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <a className="button is-dark" href="/blog">
              Blog
            </a>
            <a className="button is-light" href="/cv">
              C.V.
            </a>
            <a className="button is-light" href="/about">
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
