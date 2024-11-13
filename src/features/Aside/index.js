import { Section } from "../../common/Section";
import { StyledAside } from "./styled";
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
						"filmy i seriale kryminalne, detektywistyczne i prawnicze, które angażują w rozwiązywanie spraw i analizowanie złożonych sytuacji",
						"lubię układać puzzle, które doskonale ćwiczą pamięć i rozwijają umiejętności logicznego myślenia",
					]}
				/>
			</>
		)}
	</StyledAside>
);
