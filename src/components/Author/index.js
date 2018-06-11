import React from 'react';
import { NameWrapper } from './style.js'

const Author = (props) => {
    const {content} = props;
    const displayAuthor = content.length > 0 ? (<div>by <NameWrapper>{content}</NameWrapper></div>) : '[...]';
  return(
    <div>{displayAuthor}</div>
  )
}

Author.defaultProps = {content:''};

export default Author;
