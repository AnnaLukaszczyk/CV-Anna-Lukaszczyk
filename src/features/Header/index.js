import {
	StyledHeader,
	Layers,
	LayerBox,
	Layer1,
	Layer2,
	Layer3,
	Data,
	PhotoBackground,
	Photo,
	NameAndContact,
	Name,
	Mail,
	PhoneNumber,
	Address,
	Info,
} from "./styled";
import CVPhoto from "./CV-photo.jpg";
import { AddressLink, EmailLink, PhoneNumberLink } from "../../common/Links";

export const Header = () => (
	<StyledHeader>
		<div>
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
		</div>
		<Data>
			<PhotoBackground>
				<Photo src={CVPhoto} alt="Zdjęcie Anny Łukaszczyk" />
			</PhotoBackground>
			<NameAndContact>
				<Name>Anna Łukaszczyk</Name>
				<Mail>
					<EmailLink />
				</Mail>
				<PhoneNumber>
					<PhoneNumberLink />
				</PhoneNumber>
				<Address>
					<AddressLink />
				</Address>
			</NameAndContact>
		</Data>
		<Info>Obróć telefon aby zobaczyć CV</Info>
	</StyledHeader>
);
