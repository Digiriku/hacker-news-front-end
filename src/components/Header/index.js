import React, { Component } from 'react';
import { HeaderWrapper, ListWrapper, HeaderWrapperInner } from './style';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Header = props => {
	return (
		<HeaderWrapper>
			<HeaderWrapperInner>
				<Link to="/">
					<h1>Hacker News</h1>
				</Link>
				<div>
					<ListWrapper>
						<div>News</div>
						<div>Comments</div>
						<div>Show</div>
						<div>Other thing</div>
						<img src="thing.com"/>
						<div>
							<Link to="/askstories">Ask</Link>
						</div>
						<div>Jobs</div>
						<div>Submit</div>
					</ListWrapper>
				</div>
			</HeaderWrapperInner>
		</HeaderWrapper>
	);
};

export default Header;
