/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-151a6657fcbdf92f17c2.js"
  },
  {
    "url": "app-d4a5367f029aacf4ae27.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-31ee4b698d609e346331.js"
  },
  {
    "url": "index.html",
    "revision": "03a90eb5ec5b7b947a25a6a042c625fd"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2dfe41485e037b2f0e6d29c1a489e18e"
  },
  {
    "url": "component---src-pages-index-js.6d59ddb7d10286373742.css"
  },
  {
    "url": "component---src-pages-index-js-b1f9d0f46f470fb0f161.js"
  },
  {
    "url": "6-1c7d4ce1c02dafcfe4af.js"
  },
  {
    "url": "0-2d5aaeecf52393e28a26.js"
  },
  {
    "url": "static/d/74/path---index-6a9-r39Zh8OiMgcYCRSGeOpSRXX9xvE.json",
    "revision": "d7a8ee465730f8863ae23fd5c8b80353"
  },
  {
    "url": "component---src-pages-404-js.6d59ddb7d10286373742.css"
  },
  {
    "url": "component---src-pages-404-js-be2b76844bbecf847ff9.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/api-docs/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});