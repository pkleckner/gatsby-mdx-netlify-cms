/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/**
 * Tells Gatsby to ignore error related to:
 * 
 *   Can't resolve 'fs' in '[Location]\gatsby-mdx-netlify-cms-starter\node_modules\remark-mdx\node_modules\@babel\core\lib\transformation'
 *   File: node_modules\remark-mdx\node_modules\@babel\core\lib\transformation\normalize-file.js
 */

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        node: {
            fs: 'empty'
        }
    })
}