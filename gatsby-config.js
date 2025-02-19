/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Nelli Mugattarova`,
    description: `A personal website and portfolio of Nelli Mugattarova, a software engineer.`,
    siteUrl: `process.env.NODE_ENV.GATSBY_API_URL`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: './static/img/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog-posts',
        path: './static/blog-posts/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: './static/projects/',
      },
    },
  ],
};
