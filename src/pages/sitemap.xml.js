//pages/sitemap.xml.js

import { sanityClient } from "@lib/sanity";

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const posts = await sanityClient.fetch(`*[_type == "post"]`);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       <url>
         <loc>https://www.femlove.blog/</loc>
       </url>
       <url>
         <loc>https://www.femlove.blog/blog</loc>
       </url>
       <url>
         <loc>https://www.femlove.blog/angebot</loc>
       </url>
       <url>
         <loc>https://www.femlove.blog/empfehlungen</loc>
       </url>
       <url>
         <loc>https://www.femlove.blog/ueber-mich</loc>
       </url>
       <url>
         <loc>https://www.femlove.blog/kontakt</loc>
       </url>
       ${posts
         .map(({ slug }) => {
           return `
         <url>
             <loc>${`https://www.femlove.blog/post/${slug.current}`}</loc>
         </url>
       `;
         })
         .join("")}
     </urlset>
   `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export default SiteMap;
