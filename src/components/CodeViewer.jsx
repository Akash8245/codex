import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Use a dark theme like tomorrowNight

const CodeViewer = ({ code }) => {
  return (
    <SyntaxHighlighter language="c" style={tomorrowNight}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeViewer;
