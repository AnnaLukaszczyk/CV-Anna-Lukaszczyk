import styled from "styled-components";

export const StyledMain = styled.main`
	padding-top: 200px;
	padding-bottom: 100px;
	height: 100%;
	width: 65%;
	background-color: #e1e1e1;
	overflow: hidden;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		padding-top: 170px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		padding-top: 140px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		padding-top: 130px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
		padding-top: 110px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		width: 100%;
	}
`;

export const Description = styled.p`
	text-align: justify;
`;
