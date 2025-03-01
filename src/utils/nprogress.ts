'use client'
// utils/nprogress.ts
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

const handleRouteChangeStart = () => {
  NProgress.start();
  console.log("NProgress started");
};
const handleRouteChangeComplete = () => {
  NProgress.done();
  console.log("NProgress done");
};
const handleRouteChangeError = () => {
  NProgress.done();
  console.log("NProgress error");
};

Router.events.on('routeChangeStart', handleRouteChangeStart);
Router.events.on('routeChangeComplete', handleRouteChangeComplete);
Router.events.on('routeChangeError', handleRouteChangeError);

export default NProgress;
