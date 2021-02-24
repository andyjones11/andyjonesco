import Link from "next/link";
import Layout from "../components/Layout";
import {getAllArticles} from "../api/articles";
import Head from "next/head";
import PageHeader from "../components/PageHeader";

const ArticleTitle = ({ article }) => (
  <div className="my-2">
    <Link href={`/articles/${article.slug}`}>
      <a className="text-lg hover:bg-black hover:text-white transition-colors duration-200 ease-in-out">
        {article.title}
      </a>
    </Link>
  </div>
)

const Articles = ({ allArticles }) => (
  <>
    <Head>
      <title>Articles - Andy Jones</title>
    </Head>
    <Layout showHeader={true} theme="white">
      <div className="my-10">
        <PageHeader text="Articles"/>
        <div className="my-6 flex flex-col">
          {allArticles.map(a => (
            <ArticleTitle key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </Layout>
  </>
)

export const getStaticProps = () => {
  return {
    props: {
      allArticles: getAllArticles()
    }
  }
}

export default Articles