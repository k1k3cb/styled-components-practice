import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	margin-bottom: 1.125rem;
	align-items: center;
`;

export const StyledImage = styled.img`
	width: 1.75rem;
	height: 1.75rem;
	border-radius: 1.75rem;
	border: 2px solid #a775f1;
	margin-right: 1.0625rem;
`;

export const StyledH2 = styled.h2`
	color: ${({ $color }) => $color};
	font-size: 0.8125rem;
	font-weight: 500;
	line-height: 0.8125rem;
	margin-bottom: 0;
`;

export const StyledH3 = styled.h3`
	color: ${({ $color }) => $color};
	font-size: 0.6875rem;
	font-weight: 500;
	line-height: 0.6875rem;
	opacity: 0.5;
	margin-top: 0;
`;
