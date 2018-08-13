import React, { Component } from 'react';
import GridItem from '../GridItem';
import GridWrapper from './style';

class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = { expandedIndex: null };

		this.handleExpansion = this.handleExpansion.bind(this);
	}

	handleExpansion(id) {
		this.setState({ expandedIndex: id });
	}

	render() {
		const { articles } = this.props;
		const expandedIndex = this.state.expandedIndex;

		const displayArticles = articles.map((a, i) => (
			<GridItem
				key={a.id}
				id={a.id}
				title={a.title}
				author={a.by}
				score={a.score}
				url={a.url}
				time={a.time}
				text={a.text}
				handleExpansion={this.handleExpansion}
				isExpanded={expandedIndex === a.id}
			/>
		));

		return <GridWrapper>{displayArticles}</GridWrapper>;
	}
}

export default Grid;
