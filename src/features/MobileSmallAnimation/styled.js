import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileSmallAnimation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  70%, 100% {
    transform: rotate(90deg);
  }
`;

const blinkArrowAnimation = keyframes`
  0%, 10%, 30%, 60% {
		opacity: 1;
  }
  15%, 45%, 75%, 100% {
    opacity: 0;
  }
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 80px;
	animation: ${MobileSmallAnimation} 4s infinite;
`;

export const ArrowRotateIcon = styled(FontAwesomeIcon)`
	height: 50px;
	color: rgba(128, 128, 128, 1);
	animation: ${blinkArrowAnimation} 4s infinite;
`;

export const PhoneRotateIcon = styled(FontAwesomeIcon)`
	margin: 20px 0;
	height: 100px;
	color: rgba(128, 128, 128, 1);
`;
