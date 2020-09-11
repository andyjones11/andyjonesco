import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const articlesDirectory = join(process.cwd(), "pages", "articles")

const getArticleSlugs = () => {
  return fs.readdirSync(articlesDirectory)
}

const getArticleBySlug = (slug) => {
  const pathToArticle = join(articlesDirectory, slug)
  const files = fs.readdirSync(pathToArticle)
  const indexFile = files.find(
    (file) => file.substr(0, file.lastIndexOf(".")) === "index"
  )
  const fullPath = join(pathToArticle, indexFile)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data } = matter(fileContents)

  data.slug = slug

  return data
}

export const getAllArticles = () => {
  const slugs = getArticleSlugs()
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .sort((postOne, postTwo) => postOne.date > postTwo.date ? "-1" : "1");

  return articles
}