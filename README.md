### Next.js-13

#### Setting Up
- Create a next app with: `npm i next@latest react@latest react-dom@latest eslint-config-next@latest`.
- Added package.json script 
```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
``` 
- Then a next.config.js file
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
```
- Run the development environment `npm run dev`
#### Rendering 
There are different components used when data on the page:
- The Head component contains the meta data and cannot be give a route but can be introduced to nested routing.`partial templates`can also be used.
- The Layout component is a shared UI component. Templates can also be used when information dynamically changes upon request.
- Navigation: Link components are implemented for cached segments of a page rendered.
- Programmatic routing: next server components are converted to be used by the client.`"use client"` on top of the component.
- Then a hook is used to navigate `useRouter from "next/navigation"`.
#### Data fetching
 - Server components cache and stream automatically to the Client without exposing your API keys.
 - To get data without fetch: using DB, file system or 3rd party SDK without getting all granular caching and deduplicating support.
 - Client components: for client data fetching use `SWR`or `ReactQuery`.
 - Serverless function with next.js kind proxy `https://fanout.io`.
 - Static params generation for the Slug running static dynamic pages.