import { ArrowRotateIcon, Box, PhoneRotateIcon } from "./styled";
import {
	faArrowRight,
	faMobileScreenButton,
	faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export const MobileSmallAnimation = () => (
	<Box>
    <ArrowRotateIcon icon={faArrowRight}/>
		<PhoneRotateIcon icon={faMobileScreenButton} />
		<ArrowRotateIcon icon={faArrowLeft}/>
	</Box>
);
