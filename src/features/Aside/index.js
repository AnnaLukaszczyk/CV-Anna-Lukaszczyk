import { Section } from "../../common/Section";
import { StyledAside, Info } from "./styled";
import {
	AddressLink,
	EmailLink,
	PhoneNumberLink,
	LinkedInLink,
} from "../../common/Links";

export const Aside = ({ isFirstPage }) => (
	<StyledAside>
		{isFirstPage ? (
			<>
				<Section
					name="Kontakt"
					content={[
						<EmailLink />,
						<PhoneNumberLink />,
						<AddressLink />,
						<LinkedInLink />,
					]}
					showIcons={false}
					showTitle={false}
				/>
				<Section
					name="Umiejętności"
					content={[
						"znajomość Responsive Web Design (RWD) i zasad projektowania UI",
						"HTML, CSS (Flexbox, Grid)",
						"JavaScript",
						"React, Redux",
						"Bootstrap",
						"Git, GitHub",
						"Figma",
						"Trello",
					]}
				/>
				<Section
					name="Mocne strony"
					content={[
						"umiejętność efektywnego zarządzania czasem",
						"bezproblemowa praca w zespole",
						"kreatywność",
						"dokładność i dbałość o szczegóły",
						"komunikatywność",
						"zdolność do analitycznego myślenia",
						"samodyscyplina",
						"umiejętność szybkiego uczenia się",
					]}
				/>
				<Section name="Języki obce" content={["język angielski - B2"]} />
			</>
		) : (
			<>
				<Section
					name="Jak pracuję"
					content={["energicznie", "zadaniowo", "skutecznie", "efektywnie"]}
				/>
				<Section
					name="Zainteresowania"
					content={[
						"W wolnym czasie z przyjemnością oglądam filmy i seriale kryminalne, detektywistyczne oraz prawnicze, które angażują w rozwiązywanie spraw i analizowanie złożonych sytuacji. Ponadto relaksuje mnie układanie puzzli, co dodatkowo doskonale ćwiczy pamięć i rozwija umiejętności logicznego myślenia.",
					]}
					showIcons={false}
				/>
				<Section name="Uprawnienia" content={["prawo jazdy kat. B"]} />
				<Section
					name="Rekomendacje"
					content={[
						"Uprzejmie zapraszam do zapoznania się z rekomendacjami i opiniami na moim profilu LinkedIn.",
					]}
					showIcons={false}
				/>
				<Info>
				Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w CV na potrzeby rekrutacji, zgodnie z Rozporządzeniem (UE) 2016/679 (RODO).
				</Info>
			</>
		)}
	</StyledAside>
);
