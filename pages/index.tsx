import React from 'react';
import Head from 'next/head';
import Home from '../components/home';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Kaily Liu</title>
        <meta name="description" content="Some things I've made 🤸‍♀️" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="google-site-verification" content="fk7oExtZ4HBdXiVEp9WP-TcoORD8BJJhnpiGSU7zvLY" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
};

export default IndexPage;
