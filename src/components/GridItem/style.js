import styled, { css } from 'styled-components';

export default styled.div`
	padding: 0.5rem;
	background-color: #ffffff;
	box-shadow: 0px 17px 69px -12px rgba(0, 0, 0, 0.42);
	text-align: center;
	cursor: pointer;
	&:hover {
		background: rgba(255, 225, 225, 0.42);
	}
	${props =>
		props.isExpanded &&
		css`
			grid-row: span 2;
			grid-column: span 2;
		`};

	a {
		text-decoration: none;
	}
`;
