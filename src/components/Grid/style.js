import styled from 'styled-components';

export default styled.div`
	width: 100%;
	padding: 1rem 0 0 1rem;
	margin: 1rem auto;
	display: grid;
	grid-template-columns: repeat(4, 25%);
	grid-row-gap: 16px;
	grid-column-gap: 16px;
	justify-items: stretch;
	align-items: stretch;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;
