import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';

const features = [
  {
    title: 'Netdata📚',
    content: "Monitor your servers, containers, and applications,in high-resolution and in real-time.",
  },
  {
    title: 'What Is a Database?📝',
    content: 'A database is an organized collection of structured information, or data, typically stored electronically in a computer system.',
  },
  {
    title: 'Google Cloud Databases🔥',
    content: 'Migrate, manage, and modernize data with secure, reliable, and highly available databases from Google Cloud. Find the right database for your needs.',
  },
  {
    title: 'Database | Definition🧠',
    content: 'Database, any collection of data, or information, that is specially organized for rapid search and retrieval by a computer.',
  },
  {
    title: 'Database: Getting Started💻',
    content: 'Almost every modern web application interacts with a database. Laravel makes interacting with databases extremely simple across a variety of supported databases ',
  },
  {
    title: 'FirebaseUI for Web 🚀',
    content: 'FirebaseUI is an open-source JavaScript library for Web that provides simple, customizable UI bindings on top of Firebase SDKs to eliminate boilerplate code and promote best practices.',
  },
];

const components = [
  {
    title: 'supabase📚',
    content: "🔥The open source Firebase alternative. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.",
    url: 'https://supabase.com/',
  },
  {
    title: 'appwrite📝',
    content: '🔥Appwrite is a backend platform for developing Web, Mobile, and Flutter applications. Built with the open source community ',
    url: 'https://appwrite.io/',
  },
  {
    title: 'What is RxDB🐱',
    content: '🔥A fast, local-first, reactive Database for JavaScript Applications',
    url: 'https://rxdb.info/',
  },
  {
    title: 'React Native Firebase🧠',
    content: '🔥 A well-tested feature-rich modular Firebase implementation for React Native. Supports both iOS & Android platforms for all Firebase services..',
    url: 'https://rnfirebase.io/',
  },
  {
    title: 'angularfire 💻',
    content: '🔥AngularFire smooths over the rough edges an Angular developer might encounter.',
    url: 'https://firebaseopensource.com/',
  },
  {
    title: 'flutterfire🚀',
    content: '🔥 A collection of Firebase plugins for Flutter apps.',
    url: 'https://firebase.google.com/docs/flutter/setup?platform=ios',
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      permalink="/"
      description="Set up a modern web app by running one command."
    >
      <div className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create SOLANA logo"
            src={useBaseUrl('img/logo.png')}
          />
          <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('blog')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {features.length > 0 && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2 className={styles.featureTitle}>{title}</h2>
                  <p className={styles.featureContent}>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {components.length > 0 && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {components.map(({ title, url, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <div className={styles.card}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <Link className="button button--primary" to={url}>
                    Visit website
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

default Home;
