const fs = require("fs")
const {join} = require("path")
const withMdxEnhanced = require("next-mdx-enhanced");

const articlesDirectory = join(process.cwd(), "pages", "articles")

const getArticleSlugs = () => {
  return fs.readdirSync(articlesDirectory)
    .filter(file => file.endsWith(".mdx"))
    .map(file => file.replace(".mdx", ""))
}

module.exports = withMdxEnhanced(({
  defaultLayout: true,
  fileExtensions: ["mdx", "md"]
}))({
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  exportPathMap: function() {

    const articleMap = getArticleSlugs().reduce((acc, curr) => ({
        ...acc,
        [`/articles/${curr}`]: {page: `articles/${curr}`}
      }), {})

    return {
      '/': { page: '/' },
      '/contact': { page: 'contact' },
      '/work': { page: 'work' },
      '/articles': { page: 'articles' },
      '/404': {page: '404'},
      ...articleMap
    }
  }
})
