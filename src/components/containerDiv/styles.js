import styled from 'styled-components';

export const Container = styled.div`
	margin: 4.4375rem 1.5rem;

	@media (width>=768px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);		
		gap: 1rem;
	}
`;
