import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'; 

const CodeViewer = ({ code }) => {
  return (
    <SyntaxHighlighter language="c" style={atomOneDark}>
      
      {code}
      
    </SyntaxHighlighter>
  );
};

export default CodeViewer;
