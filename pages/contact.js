import Layout from "../components/Layout";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <Layout>
      <div className="flex-grow flex flex-col justify-center">
        <p className="my-2">
          <span className="font-semibold">contact</span> at <span className="font-semibold">andyjones</span> dot <span className="font-semibold">co</span>
        </p>
        <p className="my-2">
          <a className="font-semibold hover:underline" href="https://twitter.com/andyjones11" target="_blank">
            @andyjones11
          </a>
        </p>
      </div>
    </Layout>
  )
}
export default Contact