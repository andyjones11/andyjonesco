import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AndyJonesImg = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} placeholderStyle={{ visibility: "hidden" }} {...props} />
}

const LinkedInSVG = () => (
  <svg className="fill-current" version="1.1" id="LinkedIn" x="0px" y="0px"
	 viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
    <path d="M1,6h4v13H1V6z M3,1C1.8,1,1,2,1,3.1C1,4.1,1.8,5,3,5c1.3,0,2-0.9,2-2C5,1.9,4.2,1,3,1z M14.6,6.2
      c-2.1,0-3.3,1.2-3.8,2h-0.1l-0.2-1.7H6.9C6.9,7.6,7,8.9,7,10.4V19h4v-7.1c0-0.4,0-0.7,0.1-1c0.3-0.7,0.8-1.6,1.9-1.6
      c1.4,0,2,1.2,2,2.8V19h4v-7.4C19,7.9,17.1,6.2,14.6,6.2z"/>
  </svg>
)

const TwitterSVG = () => (
  <svg className="fill-current" version="1.1" id="Twitter" x="0px" y="0px"
	 viewBox="0 0 20 20" enable-background="new 0 0 20 20">
<path d="M17.316,6.246c0.008,0.162,0.011,0.326,0.011,0.488c0,4.99-3.797,10.742-10.74,10.742
	c-2.133,0-4.116-0.625-5.787-1.697c0.296,0.035,0.596,0.053,0.9,0.053c1.77,0,3.397-0.604,4.688-1.615
	c-1.651-0.031-3.046-1.121-3.526-2.621c0.23,0.043,0.467,0.066,0.71,0.066c0.345,0,0.679-0.045,0.995-0.131
	C2.84,11.183,1.539,9.658,1.539,7.828c0-0.016,0-0.031,0-0.047c0.509,0.283,1.092,0.453,1.71,0.473
	c-1.013-0.678-1.68-1.832-1.68-3.143c0-0.691,0.186-1.34,0.512-1.898C3.942,5.498,6.725,7,9.862,7.158
	C9.798,6.881,9.765,6.594,9.765,6.297c0-2.084,1.689-3.773,3.774-3.773c1.086,0,2.067,0.457,2.756,1.191
	c0.859-0.17,1.667-0.484,2.397-0.916c-0.282,0.881-0.881,1.621-1.66,2.088c0.764-0.092,1.49-0.293,2.168-0.594
	C18.694,5.051,18.054,5.715,17.316,6.246z"/>
</svg>
)


const IndexPage = () => (
  <Layout>
    <section className="mx-6 flex flex-col mt-12 lg:mx-64">

      <div className="flex flex-col sm:flex-row-reverse sm:mt-16">
          <div className="flex justify-center sm:w-1/2">
            <AndyJonesImg className="rounded-full h-36 h-36" />
          </div>

          <div className="mt-8">
              <p className="my-2">
                  I'm Andy, a software developer based in London, UK.
              </p>
              <p className="my-2">
                  I am passionate about building <strong>software</strong>, <strong>products</strong> and <strong>everything tech</strong>.
              </p>
              <p className="my-2">
                  I am currently working at <a class="text-blue-600 font-bold" href="https://growthstreet.co.uk">Growth Street</a> where I'm building features on the backend and frontend.
              </p>

              <h4 className="mt-6 font-bold">Current technologies and areas of interest include:</h4>
              <ul className="mt-4 list-disc ml-6">
                  <li>
                      <a className="text-blue-600 hover:underline" target="_blank" href="https://www.python.org/">Python</a> / <a className="text-blue-600 hover:underline" target="_blank" href="https://www.djangoproject.com/">Django</a> / <a className="text-blue-600 hover:underline" target="_blank" href="https://www.starlette.io/">Starlette</a>
                  </li>
                  <li><a className="text-blue-600 hover:underline" target="_blank" href="https://elixir-lang.org/">Elixir</a> / <a className="text-blue-600 hover:underline" href="https://phoenixframework.org/">Phoenix</a></li>
                  <li><a className="text-blue-600 hover:underline" target="_blank" href="https://nodejs.org/">NodeJS</a> / <a className="text-blue-600 hover:underline" target="_blank" href="https://reactjs.org/">React</a></li>
                  <li><a className="text-blue-600 hover:underline" target="_blank" href="https://graphql.org">GraphQL</a></li>
              </ul>

          </div>
        </div>

        <div className="mt-8 sm:mt-32 flex justify-center items-center">
            <h2 className="text-xl font-bold text-gray-800 mr-4">Follow me</h2>

            <a className="inline-block h-6 w-6 text-gray-500 hover:text-blue-600 mr-4" target="_blank" href="https://www.linkedin.com/in/andy-jones-111/">
              <LinkedInSVG/>
            </a>
            <a class="inline-block h-6 w-6 text-gray-500 hover:text-blue-400 mr-4" target="_blank" href="http://twitter.com/andyjones11">
              <TwitterSVG/>
            </a>
        </div>
      </section>

  </Layout>
)

export default IndexPage
