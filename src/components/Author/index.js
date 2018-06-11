import React from 'react';
import { NameWrapper } from './style.js'

const Author = (props) => {
  return(
    <div>by <NameWrapper>{props.content}</NameWrapper></div>
  )
}

export default Author;