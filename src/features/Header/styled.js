import styled from "styled-components";

export const StyledHeader = styled.header`
	position: absolute;
	height: 220px;
	width: 100%;
	background-color: transparent;
	overflow: hidden;
	z-index: 2;
`;

export const Layers = styled.div`
	position: relative;
	height: 200px;
	width: 100%;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		height: 170px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		height: 144px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		height: 134px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
		height: 114px;
	}
`;

export const LayerBox = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	filter: drop-shadow(-1px 6px 3px rgba(0, 0, 0, 0.5));
`;

export const Layer = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
`;

export const Layer1 = styled(Layer)`
	background-color: #2e7084;
	clip-path: polygon(0 0, 100% 0, 100% 70%, 86% 100%, 0% 20%);
`;

export const Layer2 = styled(Layer)`
	width: 101%;
	background-color: #2e7186;
	clip-path: polygon(20% 0, 100% 0, 100% 90%);
`;

export const Layer3 = styled(Layer)`
	background-color: #397c90bb;
	background: linear-gradient(
		165deg,
		rgba(57, 124, 144, 1) 54%,
		rgba(57, 124, 144, 0.01) 100%
	);
	clip-path: polygon(0 0, 100% 0, 100% 30%, 64% 96%, 0% 50%);
`;

export const Data = styled.div`
	position: absolute;
	display: flex;
	left: 56px;
	top: 20px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletLarge}px) {
		left: 5.5vw;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		top: 14px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		visibility: hidden;
	}
`;

export const PhotoBackground = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 186px;
	width: 150px;
	border-radius: 3px;
	background: linear-gradient(
		90deg,
		rgba(146, 203, 221, 1) 0%,
		rgba(34, 89, 105, 1) 100%
	);

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		height: 156px;
		width: 126px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		height: 132px;
		width: 107px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		height: 112px;
		width: 91px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
		height: 98px;
		width: 80px;
	}
`;

export const Photo = styled.img`
	height: 180px;
	width: 144px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		height: 150px;
		width: 120px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		height: 126px;
		width: 101px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		height: 108px;
		width: 87px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
		height: 94px;
		width: 76px;
	}
`;

export const NameAndContact = styled.div`
	margin-left: 100px;
	color: azure;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletLarge}px) {
		margin-left: 10vw;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		font-size: 14px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		margin-left: 7vw;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
		font-size: 12px;
	}
`;

export const Name = styled.h1`
	margin-top: 16px;
	font-size: 32px;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 1px;
	text-shadow: 1px 1px 2px rgb(26, 26, 26);

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		margin-top: 10px;
		font-size: 28px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		margin-top: 4px;
		font-size: 24px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		font-size: 22px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
		font-size: 19px;
	}
`;

export const Mail = styled.p`
	margin: 10px 0;
	text-shadow: 1px 1px 2px rgb(26, 26, 26);

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		margin: 6px 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		margin: 4px 0;
	}
`;

export const PhoneNumber = styled.p`
	display: inline-block;
	text-shadow: 1px 1px 2px rgb(26, 26, 26);
`;

export const Address = styled.p`
	display: inline-block;
	margin-left: 30px;
	text-shadow: 1px 1px 2px rgb(26, 26, 26);

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		margin-left: 26px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
		margin-left: 22px;
	}
`;

export const Info = styled.p`
position: absolute;
width: 100%;
top: 20px;
text-align: center;
color: azure;
font-size: 20px;
visibility: hidden;

@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
	visibility: visible;
	}
`