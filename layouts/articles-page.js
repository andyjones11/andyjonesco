import Layout from "../components/Layout";

const ArticlePage = ({ children, frontMatter }) => {
  return (
    <Layout showHeader={true} theme="white">
      <div className="my-20">
        <h1 className="mb-8 font-mono font-extrabold text-xl leading-9 tracking-tight">
          {frontMatter.title}
        </h1>
        {children}
      </div>
    </Layout>
  )
}

export default ArticlePage