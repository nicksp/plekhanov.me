module.exports = {
  siteMetadata: {
    title: 'Nick Plekhanov',
    author: 'Nick Plekhanov',
    description:
      'Nick Plekhanov is a seasoned fullstack developer, entrepreneur and passionate photographer making the web an awesome place.',
    lang: 'en',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Blog',
        link: '/blog/',
      },
      {
        name: 'Notes',
        link: '/notes',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: 'plekhanov',
      },
    },
    ...['blog', 'notes', 'assets'].map((type) => ({
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/${type}`,
        name: type,
      },
    })),
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        extensions: ['.mdx', '.md', '.markdown'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: '#fafafa',
              maxWidth: 690,
            },
          },
          'gatsby-remark-embedder',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Nick Plekhanov's personal website`,
        short_name: 'nicksp',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-emotion',
  ],
}
