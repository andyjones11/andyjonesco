import Link from "next/link";
import Layout from "../components/Layout";
import {getAllArticles} from "../api/articles";

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
  <Layout showHeader={true} theme="white">
    <h1 className="font-mono font-extrabold text-2xl leading-9 tracking-tight">Articles</h1>
    <div className="my-6 flex flex-col">
      {allArticles.map(a => (
        <ArticleTitle key={a.slug} article={a} />
      ))}
    </div>
  </Layout>
)

export const getStaticProps = () => ({
  props: {
    allArticles: getAllArticles()
  }
})

export default Articles