import React from 'react';
import GridItem from '../GridItem';
import GridWrapper from './style';

const Grid = (props) => {

const {articles} = props;

const displayArticles = articles.map((a, i) => <GridItem key={i} id={a.id} title={a.title} author={a.by} score={a.score} url={a.url} time={a.time} text={a.text} /> );

  return(
    <GridWrapper>
    	{displayArticles}
    </GridWrapper>
  );
}

export default Grid;