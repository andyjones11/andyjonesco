import Highlight, {defaultProps} from 'prism-react-renderer'
import github from 'prism-react-renderer/themes/github';

const Code = ({children, language}) => {
  return (
    <Highlight {...defaultProps} code={children} language={language} theme={github}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={`${className} overflow-x-auto`} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => {
            if(line.length === 1 && line[0].content === "\n") return null
            return (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}

export default Code