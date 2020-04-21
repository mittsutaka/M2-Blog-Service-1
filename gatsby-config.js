const config = require('./config/site');

module.exports = {
    siteMetadata: {
        ...config
    },
    plugins: [{
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-109836197-3",
                head: true,
            }
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blogs`,
                path: `${__dirname}/contents`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-sitemap`,
        // {
        //     resolve: `gatsby-plugin-sitemap`,
        //     options: {
        //       output: `/sitemap.xml`,
        //       exclude: [`/page-2`,`/thanks`,`/dev-404-page`],
        //     }
        //   },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [{
                        resolve: 'gatsby-plugin-graphql-codegen',
                        options: {
                            fileName: `types/graphql-types.ts`,
                            documentPaths: [
                                "./src/**/*.{ts,tsx}",
                                // "./node_modules/gatsby-*/**/*.js"
                            ]
                        }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 590,
                        }
                    },
                    'gatsby-remark-prismjs-title',
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {
                                js: 'javascript',
                                sh: 'bash',
                            },
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            languageExtensions: [{
                                language: 'superscript',
                                extend: 'javascript',
                                definition: { superscript_types: /(SuperType)/ },
                                insertBefore: {
                                    function: { superscript_keywords: /(superif|superelse)/ },
                                },
                            }, ],
                            prompt: { user: 'root', host: 'localhost', global: false },
                            escapeEntities: {},
                        },
                    },
                ]
            }
        },
        {
            resolve: `gatsby-plugin-google-adsense`,
            options: {
                publisherId: `ca-pub-7472499184442554`
            },
        },
    ],
}