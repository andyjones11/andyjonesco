import Head from "next/head";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import {getAllWork} from "../api/work";
import SiteHead from "../components/SiteHead";

const Work = ({ allWork }) => (
  <>
    <SiteHead title="Work" />
    <Layout showHeader={true} theme="white">
      <div className="my-6">
        <PageHeader text="Work"/>
        <div className="my-6 flex flex-col">
          {allWork.map(w => (
            <div key={w.slug} className="my-6">
              <h3 className="text-lg mb-2">
                {w.title}
              </h3>
              <p className="font-extralight mb-2">
                {w.description}
              </p>
              <a
                className="hover:bg-black hover:text-white transition-colors duration-200 ease-in-out"
                href={w.link}
                target="_blank"
              >
                View on {w.source}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  </>
)

export const getStaticProps = () => {
  return {
    props: {
      allWork: getAllWork()
    }
  }
}

export default Work