const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced(({
  defaultLayout: true,
  fileExtensions: ["mdx", "md"]
}))({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})
