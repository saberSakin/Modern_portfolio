import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '5xm71b3e',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skUWLYYugt7ymVFoUnwkpK2G9Q778psnrPSgbFhwYaXluDODvwcIm3ah3QhZr69k8DxglntEaDJqRsKKx9wgiW6Z4zFZBp0T2NLeb0BUK4Aa2refEkhdJXuRIle6wZydrEDE1Hvqf1MXeeWEnApVtdRZpS4lTqnIUn5TXzsjz5lblTzsIky0',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
