import { groq } from "next-sanity";

export const postquery = groq`
*[_type == "post"] | order(publishedAt desc, publishedAt desc) {
  ...,
  author->,
  publishedAt,
  categories[]->
}
`;

export const homeContentQuery = groq`
  *[_type == "homepage"][0]
  {
  ...,
    }
    `;

export const postqueryHome = groq`
  *[_type == "post" && isTopPost == true] | order( publishedAt desc)
  {
    _id, 
    title, 
    _createdAt,
    publishedAt,
    slug,
    shortDescription,
    mainImage,
    categories[]->{title}}
    `;
export const categoryQuery = groq`
*[_type == "category"] | order( title asc)
{
  _id, 
  title, 
  }
  `;

export const postqueryBlogs = groq`
*[_type == "post"] | order( publishedAt desc)
{
  _id, 
  title, 
  _createdAt,
  publishedAt,
  slug,
  shortDescription,
  mainImage,
  categories[]->{title}}
  `;

export const configQueryAbout = (url) => groq`
*[_type == "siteconfig" && url =='https://femlove.blog/ueber-mich' + url][0] {
  ...,
}
`;

export const configQuery = groq`
*[_type == "siteconfig"] {
  ...,
}
`;

export const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  author->,
  categories[]->,
  body[]{
  	...,
      video{
        asset->,
      },
	},
}
`;

export const pathquery = groq`
*[_type == "post"] {
  'slug': slug.current,
}
`;

export const authorsquery = groq`
*[_type == "author"] {
 ...
}
`;

// test below
// to delete later

// export const listquery = groq`
// *[_type == "listing"] | order(_createdAt desc) [$start..$end] {
//   ...,
//   category->
//  }
// `;

// export const productquery = groq`
// *[_type == "listing" && slug.current == $slug][0] {
//   ...,
//   category-> {
//     ...,
//     enqform->,
//     vendorform->
//   }
//  }
