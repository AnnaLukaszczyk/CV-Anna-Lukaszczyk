import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
	cursor: pointer;

	&:hover + p {
		color: azure;
	}
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
	color: azure;
`;