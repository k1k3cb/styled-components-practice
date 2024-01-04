import styled from 'styled-components';

export const StyledCardTitle = styled.h2`
	color: ${({ $color }) => $color};
	font-size: 1.25rem;
	font-weight: 600;
`;

export const StyledCardContent = styled.p`
	color: ${({ $colorContent }) => $colorContent};
	font-size: 0.8125rem;
	font-weight: 500;
	line-height: 1.125rem; /* 138.462% */
	opacity: 0.7;
`;

export const StyledCardContainer = styled.div`
	margin-bottom: 1.5rem;
	padding: 2rem;
	border-radius: 0.5rem;
	background: ${({ $backgroundColor }) => $backgroundColor};
	box-shadow: 40px 60px 50px -47px rgba(72, 85, 106, 0.25);

	&.card-violet {
		background-image: url('/assets/images/bg-pattern-quotation.svg');
		background-repeat: no-repeat;
		background-position: top 0.625rem right 3.125rem;
	}

	@media (width>=768px) {
		&.card-violet {
			grid-column: span 2;
		}
		&.card-white-small {
			grid-row: 2;
		}
		&.card-black {
			grid-row: 2;
			grid-column: span 2;
		}
		&.card-white {
			grid-column: 4 / span 2;
			grid-row: span 2;
		}
	}
`;
