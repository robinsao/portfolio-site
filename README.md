# Overview

This is the code for my portfolio site at [www.robinsao.uk](https://www.robinsao.uk).

This site uses Next.js and TailwindCSS.

# Getting Started

Run

```sh
git clone https://github.com/robinsao/portfolio-site
cd portfolio-site
npm run dev
```

By default, the logs are quite verbose regarding fetch requests.

Since the site fetches blogs from my blog site, I turned this on to make sure the caching system works correctly.

As of Next.js 15.5.2, the Next.js version this site uses, [HMR Caching](https://nextjs.org/docs/app/guides/caching#data-cache) in development mode caches your fetch requests between hot reloads. This can save big bucks on your API bills.

You can always opt-in to control the caching via other means such as environment variables.
