import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
export const client = sanityClient({
    projectId: 'xl7pzm0e',
    dataset: 'production',
    apiVersion: '2023-03-13',
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)