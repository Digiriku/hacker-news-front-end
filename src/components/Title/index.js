import React from 'react';
import TitleWrapper from './style';

const Title = (props) => {
  return(
    <TitleWrapper>{ props.content }</TitleWrapper>
  )
}

export default Title;