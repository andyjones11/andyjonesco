import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const articlesDirectory = join(process.cwd(), "pages", "articles")

const getArticleSlugs = () => {
  return fs.readdirSync(articlesDirectory)
    .filter(file => file.endsWith(".mdx"))
    .map(file => file.replace(".mdx", ""))
}

export const getArticleBySlug = (slug) => {
  const pathToArticle = join(articlesDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(pathToArticle, "utf8")
  const { data } = matter(fileContents)

  data.slug = slug

  return data
}

export const getAllArticles = () => {
  const slugs = getArticleSlugs()
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .sort((postOne, postTwo) => postOne.date > postTwo.date ? "-1" : "1");
}