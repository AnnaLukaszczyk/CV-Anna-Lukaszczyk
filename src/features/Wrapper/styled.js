import styled from "styled-components";

export const StyledWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row-reverse;
	margin: 50px;
	max-width: 820px;
	background-color: #fff;
	overflow: hidden;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletLarge}px) {
		margin: 5.5vw;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		margin: 10px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		height: calc(100vh - 20px);
	}
`;
