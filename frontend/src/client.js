import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "0kk99hoh",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: "skFhtelmdZu7Rldk38fuXXg5q0LXih35L3X5LgnRYkI6VO83uQTx5eAGUIvEMSJZG1TBods7MhcpFkX9gVhAJiYB0pXIcTlWURnpNMaQ2Q6UdVf9TjWZCZQnoPeeSWPTLoqqnA8dI0kMs5jvrPwAQ8iCMeCeHGgyMPpnjD1OZQwZVdFTKAIH",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);