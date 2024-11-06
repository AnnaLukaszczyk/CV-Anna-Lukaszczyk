import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rotateAnimation = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(30deg);
  }
`;

const jumpAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
`;

const blinkLinkAnimation = keyframes`
  0%, 100% {
    color: black;
  }
  50% {
    color: #397c90bb;
  }
`;

export const IconContainer = styled.span`
	position: relative;
	display: inline-block;
	margin-right: 25px;
`;

export const IconEnvelope = styled(FontAwesomeIcon)`
	position: absolute;
	margin-top: 2px;
	color: azure;
	filter: drop-shadow(1px 1px 2px rgb(26, 26, 26));
	opacity: 1;
	transition: opacity 0.5s ease-in-out;
`;

export const IconEnvelopeOpen = styled(FontAwesomeIcon)`
	position: absolute;
	color: azure;
	filter: drop-shadow(1px 1px 2px rgb(26, 26, 26));
	opacity: 0;
	transition: opacity 0.5s ease-in-out;
`;

export const ContactLink = styled.a`
	text-decoration: none;
	font-weight: bold;
	color: rgba(64, 64, 64, 1);
`;

export const LinkToMailContact = styled(ContactLink)`
	display: flex;

	&:hover ${IconEnvelope} {
		opacity: 0;
	}

	&:hover ${IconEnvelopeOpen} {
		opacity: 1;
	}
`;

export const Icon = styled(FontAwesomeIcon)`
	margin-right: 10px;
	color: azure;
	filter: drop-shadow(1px 1px 2px rgb(26, 26, 26));
`;

export const LinkToPhoneContact = styled(ContactLink)`
	&:hover ${Icon} {
		animation: ${rotateAnimation} 1s infinite;
	}
`;

export const LinkToAddressContact = styled(ContactLink)`
	margin-bottom: 10px;

	&:hover ${Icon} {
		animation: ${jumpAnimation} 1s infinite;
	}
`;

export const Link = styled.a`
	color: black;
	font-weight: bold;
	text-decoration: none;
	animation: ${blinkLinkAnimation} 3s infinite;
`;
