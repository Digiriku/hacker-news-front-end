import React from 'react';

const Score = (props) => {
	const { content } = props;
	const displayPoints = content === 1 ? 'point' : 'points'; 
	return(
    	<div>{content} {displayPoints}</div>
  	)
}

export default Score;