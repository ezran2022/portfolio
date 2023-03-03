import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "196s6ux6",
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token:`${process.env.REACT_APP_SANITY_TOKEN}`,
});

const builder= imageUrlBuilder(client)
export function urlFor(source) {
  return builder.image(source)
};