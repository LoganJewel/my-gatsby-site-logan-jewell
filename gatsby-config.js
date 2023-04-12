/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  //pathPrefix: "/reponame",
  siteMetadata: {
    title: 'My Gatsby Site',
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ['gatsby-plugin-image', 'gatsby-plugin-sharp', 
  {
    resolve:'gatsby-source-filesystem',
    options:{
      name: `blog`,
      path: `${__dirname}/blog`,
    },

    resolve: "gatsby-source-graphql",
    options: {
      // This type will contain remote schema Query type
      typeName: "DrupalGraqhQL",
      // This is field under which it's accessible
      fieldName: "Drupal",
      url: "https://csc496f22demo.tldr.dev/graphql",
      },
  },
  "gatsby-plugin-mdx",
],
};
