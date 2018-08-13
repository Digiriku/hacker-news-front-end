import React from 'react';
import Title from '../Title';
import Author from '../Author';
import Text from '../Text';
import Score from '../Score';
import DateTime from '../Date';
import GridWrapperItem from './style';

const GridItem = ({ id, title, author, text, score, url, time, handleExpansion, isExpanded }) => (
	<GridWrapperItem onClick={() => handleExpansion(id)} isExpanded={isExpanded}>
		<div className="grid-item-content">
			<Title content={title} />
			<Author content={author} />
			<Score content={score} />
			<a href={url} target="_blank">
				<Text content={text} />
			</a>

			<DateTime content={time} />
		</div>
	</GridWrapperItem>
);

export default GridItem;
