import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const ArticlePage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM YYYY")
              subtitle
            }
          }
        }
      }
    } 
  `)

  const articles = data.allMarkdownRemark.edges

  console.log("!@£!@£!@£", articles)

  return (
    <Layout>
      <section class="mx-6 flex flex-col mt-24 lg:mx-64">
        <div class="sm:w-1/2">
          {articles.length == 0 ? (
                <p>No Articles found</p>
          ) : (
            articles.map(a => (
              <>
                <div className="flex justify-between items-baseline mt-16">
                  <a className="text-blue-600 font-bold text-2xl" href="#">{a.node.frontmatter.title}</a>
                  <span className="text-gray-500 text-sm">{a.node.frontmatter.date}</span>
                </div>
                <p className="mt-4">{a.node.frontmatter.subtitle}</p>
              </>
            ))
          )}
        </div>
      </section>
    </Layout>
  )
} 


export default ArticlePage
