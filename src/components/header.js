import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "AndyJones.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} placeholderStyle={{ visibility: "hidden" }} style={{maxHeight: '100%'}} {...props} />
}

const MenuSVG = () => (
  <svg className="fill-current" version="1.1" id="Menu" x="0px" y="0px"
	 viewBox="0 0 20 20" enableBackground="new 0 0 20 20" >
<path d="M16.4,9H3.6C3.048,9,3,9.447,3,10c0,0.553,0.048,1,0.6,1h12.8c0.552,0,0.6-0.447,0.6-1S16.952,9,16.4,9z
	 M16.4,13H3.6C3.048,13,3,13.447,3,14c0,0.553,0.048,1,0.6,1h12.8c0.552,0,0.6-0.447,0.6-1S16.952,13,16.4,13z M3.6,7h12.8
	C16.952,7,17,6.553,17,6s-0.048-1-0.6-1H3.6C3.048,5,3,5.447,3,6S3.048,7,3.6,7z"/>
</svg>
)

const CrossSVG = () => (
  <svg className="fill-current" version="1.1" id="Cross" x="0px" y="0px"
	 viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
<path d="M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0
	c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.228,0-1.697s1.228-0.469,1.697,0L10,8.183
	l2.651-3.031c0.469-0.469,1.228-0.469,1.697,0s0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15
	C14.817,13.62,14.817,14.38,14.348,14.849z"/>
</svg>
)

const MobileNav = ({ isVisible, toggleCallback }) => (
  <div className={`
    z-50
    absolute 
    w-full 
    sm:invisible 
    sm:hidden 
    ${isVisible ? "" : " hidden"}
  `}>
    <div className="m-2 px-4 py-4 bg-white shadow-lg rounded-lg flex flex-col">
        <div className="w-full flex justify-end">
            <div onClick={() => toggleCallback(false)} class="h-6 w-6 text-gray-500 hover:text-black cursor-pointer self-center">
              <CrossSVG/>
            </div>
        </div>
        <Link className="text-center uppercase font-bold tracking-tight my-2 text-gray-800" to="/" activeClassName="text-blue-600">Home</Link>
        <Link className="text-center uppercase font-bold tracking-tight my-2 text-gray-800" to="/articles" activeClassName="text-blue-600">Articles</Link>
        <Link className="text-center uppercase font-bold tracking-tight my-2 text-gray-800" to="/contact" activeClassName="text-blue-600">Contact</Link>
    </div>
</div>
)

const Header = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  return (
    <>
      <MobileNav isVisible={isVisible} toggleCallback={setIsVisible} />
      <header className="mx-4 border-b-2 border-gray-200 py-4 flex justify-between lg:mx-64">
        <Link to="/">
          <div className="ml-2">
            <Logo/>
          </div>
        </Link>
        <div class="visible sm:invisible flex">
            <div onClick={() => setIsVisible(true)} class="h-6 w-6 text-gray-500 hover:text-black cursor-pointer self-center mr-2">
              <MenuSVG />
            </div>
        </div>
        <div class="items-center invisible sm:visible hidden sm:flex">
          <Link className="uppercase font-bold tracking-tight mr-6 text-gray-800" to="/" activeClassName="text-blue-600">
              Home
          </Link>
          <Link className="text-gray-800 uppercase font-bold tracking-tight mr-6 text-gray-800" to="/articles" activeClassName="text-blue-600">
              Articles
          </Link>
          <Link className="text-gray-800 uppercase font-bold tracking-tight mr-6 text-gray-800" to="/contact" activeClassName="text-blue-600">
              Contact
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
