import Link from "next/link"
import Layout from "../components/Layout";

const PageHeader = () => (
  <p className="font-mono text-white font-extrabold text-2xl leading-9 tracking-tight">
    I'm Andy Jones, a software developer based in London, UK
  </p>
)

const Links = () => (
  <div className="flex font-semibold">
    <div className="mr-3">
      <Link href="/articles">
        <a className="hover:bg-white hover:text-black p-2 transition-colors duration-200 ease-in-out">
          Articles
        </a>
      </Link>
    </div>
    <div className="mr-3">
      <Link href="/work">
        <a className="hover:bg-white hover:text-black p-2 transition-colors duration-200 ease-in-out">
          Work
        </a>
      </Link>
    </div>
    <div className="mr-3">
      <Link href="/contact" className="hover:bg-white hover:text-black p-2 transition-colors duration-200 ease-in-out">
        <a className="hover:bg-white hover:text-black p-2 transition-colors duration-200 ease-in-out">
          Contact
        </a>
      </Link>
    </div>
  </div>
)

 const Index = () => (
  <Layout showHeader={false} theme="black">
    <div className="flex-grow flex flex-col justify-center">
      <PageHeader />
      <p className="mt-2 font-sans font-light">
        This is my little place on the web. Click the links below to explore.
      </p>
      <div className="mt-10">
        <Links />
      </div>
    </div>
  </Layout>
 )

export default Index