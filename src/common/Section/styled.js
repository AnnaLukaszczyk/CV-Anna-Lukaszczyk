import styled from "styled-components";

export const StyledSection = styled.section`
	margin: 16px 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		margin: 12px 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		visibility: hidden;
	}
`;

export const SectionTitleShadow = styled.div`
	filter: drop-shadow(-5px 2px 8px rgba(0, 0, 0, 0.8));
`;

export const SectionTitle = styled.h2`
	padding: 3px 15px;
	font-size: 19px;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	color: azure;
	text-shadow: 1px 1px 2px rgb(26, 26, 26);
	background: ${({ $isMain }) =>
		$isMain
			? `linear-gradient(
		10deg,
		rgba(128, 128, 128, 1) 0%,
		rgba(93, 93, 93, 1) 35%,
		rgba(74, 74, 74, 1) 100%
	);
	`
			: `linear-gradient(
		10deg,
		rgba(74, 146, 168, 1) 0%,
		rgba(43, 108, 128, 1) 35%,
		rgba(35, 94, 112, 1) 100%
	)`};
	clip-path: ${({ $isMain }) =>
		$isMain
			? `polygon(
		0 0,
		50% 0,
		53% 48%,
		100% 48%,
		100% 51%,
		53% 52%,
		50% 100%,
		0% 100%
	)`
			: `polygon(
		0 0,
		75% 0,
		80% 48%,
		100% 48%,
		100% 51%,
		80% 52%,
		75% 100%,
		0% 100%
	)`};

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletLarge}px) {
		font-size: 17px;
		clip-path: ${({ $isMain }) =>
			$isMain
				? `polygon(
		0 0,
		50% 0,
		53% 48%,
		100% 48%,
		100% 51%,
		53% 52%,
		50% 100%,
		0% 100%
	)`
				: `polygon(
		0 0,
		200px 0,
		214px 48%,
		100% 48%,
		100% 51%,
		214px 52%,
		200px 100%,
		0% 100%
	)`};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		padding: 3px 10px;
		font-size: 16px;
		clip-path: ${({ $isMain }) =>
			$isMain
				? `polygon(
		0 0,
		50% 0,
		53% 48%,
		100% 48%,
		100% 51%,
		53% 52%,
		50% 100%,
		0% 100%
	)`
				: `polygon(
		0 0,
		174px 0,
		188px 48%,
		100% 48%,
		100% 51%,
		188px 52%,
		174px 100%,
		0% 100%
	)`};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		padding: 3px 8px;
		font-size: 14.5px;
		clip-path: ${({ $isMain }) =>
			$isMain
				? `polygon(
		0 0,
		50% 0,
		53% 48%,
		100% 48%,
		100% 51%,
		53% 52%,
		50% 100%,
		0% 100%
	)`
				: `polygon(
		0 0,
		154px 0,
		166px 48%,
		100% 48%,
		100% 51%,
		166px 52%,
		154px 100%,
		0% 100%
	)`};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		padding: 2px 5px;
		font-size: 14px;
		letter-spacing: 0;
		clip-path: ${({ $isMain }) =>
			$isMain
				? `polygon(
		0 0,
		50% 0,
		53% 48%,
		100% 48%,
		100% 51%,
		53% 52%,
		50% 100%,
		0% 100%
	)`
				: `polygon(
		0 0,
		138px 0,
		148px 48%,
		100% 48%,
		100% 51%,
		148px 52%,
		138px 100%,
		0% 100%
	)`};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		font-size: 12px;
		clip-path: ${({ $isMain }) =>
			$isMain
				? `polygon(
		0 0,
		50% 0,
		53% 48%,
		100% 48%,
		100% 51%,
		53% 52%,
		50% 100%,
		0% 100%
	)`
				: `polygon(
		0 0,
		118px 0,
		128px 48%,
		100% 48%,
		100% 51%,
		128px 52%,
		118px 100%,
		0% 100%
	)`};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
		padding: 2px 3px;
		font-size: 11px;
		clip-path: ${({ $isMain }) =>
			$isMain
				? `polygon(
		0 0,
		50% 0,
		53% 48%,
		100% 48%,
		100% 51%,
		53% 52%,
		50% 100%,
		0% 100%
	)`
				: `polygon(
		0 0,
		107px 0,
		115px 48%,
		100% 48%,
		100% 51%,
		115px 52%,
		107px 100%,
		0% 100%
	)`};
	}
`;
