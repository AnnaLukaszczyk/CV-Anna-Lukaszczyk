import styled from "styled-components";

export const StyledFooter = styled.footer`
	position: absolute;
	width: 100%;
	bottom: 0;
	z-index: 2;
`;
export const Layers = styled.div`
	position: relative;
	height: 100px;
	width: 100%;
	overflow: hidden;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletLarge}px) {
		height: 120px;
	}
`;

export const LayerBox = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	filter: drop-shadow(1px -4px 4px rgba(0, 0, 0, 0.3));
`;

export const Layer = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
`;

export const Layer1 = styled(Layer)`
	background-color: #2e7084;
	clip-path: polygon(0 100%, 42% 25%, 100% 70%, 100% 100%);
`;

export const Layer2 = styled(Layer)`
	width: 101%;
	background-color: #2e7186;
	clip-path: polygon(0 50%, 90% 100%, 0 100%);
`;

export const Layer3 = styled(Layer)`
	background-color: #397c90bb;
	background: linear-gradient(
		165deg,
		rgba(57, 124, 144, 0.01) 54% rgba(57, 124, 144, 1) 100%
	);
	clip-path: polygon(12% 100%, 100% 100%, 100% 10%);
`;

export const Button = styled.button`
	position: absolute;
	bottom: 10px;
	right: 10px;
	padding: 6px;
	height: 40px;
	width: 40px;
	color: azure;
	font-size: 20px;
	font-weight: bold;
	border: 1px solid azure;
	border-radius: 50%;
	background-color: transparent;

	&:hover + p {
		color: azure;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		visibility: hidden;
	}
`;

export const Info = styled.p`
	position: absolute;
	margin: 0 8px;
	text-align: center;
	bottom: 8px;
	right: 50px;
	font-size: 10px;
	color: transparent;
	transition: color 0.8s ease-in-out;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		font-size: 9px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		font-size: 8px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
		font-size: 7px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		visibility: hidden;
	}
`;
