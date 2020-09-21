import "../styles/tailwind.css"
import {MDXProvider} from "@mdx-js/react";
import Code from "../components/Code";


const components = {
  h2: props => <h2 className="mt-10 text-lg font-semibold" {...props} />,
  h3: props => <h2 className="mt-10 font-bold" {...props} />,
  p: (props) => <p className="mt-8 lg:mt-6">{props.children}</p>,
  img: (props) => <img className="mt-4 lg:mt-6" {...props} />,
  a: ({ children, ...rest }) => (
    <a className="font-semibold hover:underline" {...rest}>
      {children}
    </a>
  ),
  hr: () => <hr className="mt-4 lg:mt-6" />,
  ol: (props) => <ol className="pl-6 mt-4 list-decimal lg:mt-6" {...props} />,
  ul: (props) => <ul className="pl-6 mt-4 list-disc lg:mt-6" {...props} />,
  li: (props) => <li className="mt-2" {...props} />,

  blockquote: (props) => (
    <blockquote className="pl-4 italic border-l-4">{props.children}</blockquote>
  ),
  inlineCode: (props) => (
    <code className="px-1 py-px text-sm bg-gray-100">{props.children}</code>
  ),
  pre: (props) => <div {...props} />,
  code: ({ className, children, }) => {
    const language = className.replace(/language-/, '')
    return (
      <div className="text-sm my-8 -mx-6 sm:rounded-lg md:mx-auto">
        <Code language={language} children={children} />
      </div>
    )
  }
}

function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
    )
}

export default App
