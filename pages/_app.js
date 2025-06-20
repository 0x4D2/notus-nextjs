import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";
import Navbar from "components/Navbars/IndexNavbar.js";
import "../styles/Preloader.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "styles/globals.css";
import "styles/cyber-background.css"; 

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`
=========================================================
* Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-nextjs
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
`);
    document.insertBefore(comment, document.documentElement);
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

 const Layout = Component.layout || (({ children }) => (
  <>
    <Navbar />
    <div className="main-container">
      {/* Particles/Background müssen vor dem Body-Hintergrund liegen */}
      {Component.background && (
        <div className="fixed top-0 left-0 w-full h-full z-0">
          <Component.background />
        </div>
      )}
      
      {/* Content mit Padding unter Navbar */}
      <main className="relative z-10 pt-20"> {/* pt-20 = 80px */}
        {children}
      </main>
    </div>
  </>
));

    return (
      <React.Fragment>
        <Head>
          {/* Meta-Tags für SEO und Social Media */}
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>MG Solutions - Ihre Sicherheitslösung</title>
          <meta name="description" content="MG Solutions bietet maßgeschneiderte Cybersecurity-Lösungen für Unternehmen und Privatpersonen." />
          <meta name="keywords" content="Cybersecurity, Sicherheitslösungen, Unternehmen, Privatpersonen, MG Solutions" />
          <meta property="og:title" content="MG Solutions - Ihre Sicherheitslösung" />
          <meta property="og:description" content="MG Solutions bietet maßgeschneiderte Cybersecurity-Lösungen für Unternehmen und Privatpersonen." />
          <meta property="og:image" content="/img/social-preview.png" />
          <meta property="og:url" content="https://www.ichwillsicherheit.de" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
          <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}