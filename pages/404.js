import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Layout showHeader={false} theme="black">
      <div className="flex-grow flex flex-col justify-center">
        <h1>404 - Page Not Found</h1>
      </div>
    </Layout>
    )
}