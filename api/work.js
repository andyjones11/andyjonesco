import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const workDirectory = join(process.cwd(), "pages", "work")

const getWorkSlugs = () => {
  return fs.readdirSync(workDirectory)
    .filter(file => file.endsWith(".mdx"))
    .map(file => file.replace(".mdx", ""))
}

export const getWorkBySlug = (slug) => {
  const pathToWork = join(workDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(pathToWork, "utf8")
  const { data } = matter(fileContents)

  data.slug = slug

  return data
}

export const getAllWork = () => {
  const slugs = getWorkSlugs()
  return slugs
    .map((slug) => getWorkBySlug(slug))
    .sort((workOne, workTwo) => workOne.date > workTwo.date ? "-1" : "1");
}