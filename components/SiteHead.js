import Head from "next/head";

const SiteHead = ({ title  }) => (
  <Head>
    <title>Andy Jones {title && ` - ${title}`}</title>
    <link rel="icon" href="/favicon.ico" />
    <script async defer data-domain="andyjones.co" src="https://plausible.io/js/plausible.js"></script>
  </Head>
)

export default SiteHead
