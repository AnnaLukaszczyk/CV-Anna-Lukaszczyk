import {
	Layers,
	LayerBox,
	Layer1,
	Layer2,
	Layer3,
	StyledFooter,
	Info,
	Button,
	ArrowIcon,
} from "./styled";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => (
	<StyledFooter>
		<Layers>
			<LayerBox>
				<Layer1 />
			</LayerBox>
			<LayerBox>
				<Layer2 />
			</LayerBox>
			<LayerBox>
				<Layer3 />
			</LayerBox>
		</Layers>
		<Button><ArrowIcon icon={faArrowRight}/></Button>
		<Info>
			Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w CV w celu prowadzenia rekrutacji zgodnie z przepisami ustawy z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. U. z 2018 r. poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).
		</Info>
	</StyledFooter>
);
