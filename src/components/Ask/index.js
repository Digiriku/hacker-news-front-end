import React, { Component } from 'react';
import { loadData, loadArticles } from '../../utils/api';
import styled from 'styled-components';
import Loading from '../Loading';
import Grid from '../Grid';

const AppTitleWrapper = styled.h1`
	font-size: 3rem;
	font-weight: bold;
	color: #ff6500;
	margin: 2rem 1rem;
`;

class Ask extends Component {
	state = { loading: false, data: [] };

	async load(...args) {
		try {
			this.setState({ loading: true, error: false });
			const articlesArray = await loadData(...args);
			const data = await loadArticles(articlesArray);
			this.setState({ loading: false, data: data });
		} catch (ex) {
			this.setState({ loading: false, error: true });
		}
	}

	componentDidMount() {
		this.load('askstories.json');
	}

	render() {
		if (this.state.loading === true)
			return (
				<div>
					<Loading />
				</div>
			);
		if (this.state.error === true) return <AppTitleWrapper>Error</AppTitleWrapper>;
		return (
			<div className="App">
				<AppTitleWrapper>Ask Stories</AppTitleWrapper>
				<Grid articles={this.state.data} />
			</div>
		);
	}
}

export default Ask;
