import React from 'react';
import truncate from 'lodash/truncate';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import striptags from 'striptags';
import TextWrapper from './style.js'


const Text = (props) => {
const truncated =  truncate(props.content, {
  'length': 75,
  'separator': ' '
});

const striped = striptags(truncated,  [], '\n');

  return(
    <TextWrapper>
    { ReactHtmlParser(striped) }
    </TextWrapper>
  )
}

Text.defaultProps = {content:'[...]'};

export default Text;