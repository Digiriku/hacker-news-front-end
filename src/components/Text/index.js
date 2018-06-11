import React from 'react';
import truncate from 'lodash/truncate';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const Text = (props) => {
const truncated =  truncate(props.content, {
  'length': 100,
  'separator': ' '
});
// console.log( unescaped(truncated))


  return(
    <div>
    { ReactHtmlParser(truncated) }
    </div>
  )
}

export default Text;