import { CertificateLink, PersonalHomepage } from "../../common/Links";
import { Section } from "../../common/Section";
import { Course, Description } from "../Main/styled";

export const FirstPage = () => (
	<>
		<Section
			isMain
			name="Kursy"
			content={[
				<Course>
					07.11.2024 r. - Kurs JavaScript w MMC School <br />
					<CertificateLink certificateLink="https://github.com/AnnaLukaszczyk/CV-Anna-Lukaszczyk/blob/main/public/certificateJS.png?raw=true" />
				</Course>,
				<Course>
					01.10.2024 r. - Kurs Frontend Developer od podstaw w YouCode <br />
					<CertificateLink certificateLink="https://github.com/AnnaLukaszczyk/CV-Anna-Lukaszczyk/blob/main/public/certificateYouCode.png?raw=true" />
				</Course>,
				<Course>
					02.03.2023 r. - Kurs Tworzenia Stron WWW cz. 3 w MMC School <br />
					<CertificateLink certificateLink="https://github.com/AnnaLukaszczyk/CV-Anna-Lukaszczyk/blob/main/public/certificateWWW3.png?raw=true" />
				</Course>,
				<Course>
					09.02.2023 r. - Kurs Tworzenia Stron WWW cz. 2 - SASS, JS, Bootstrap
					na Udemy, prowadzony przez instruktora z MMC School <br />
					<CertificateLink certificateLink="https://github.com/AnnaLukaszczyk/CV-Anna-Lukaszczyk/blob/main/public/certificateWWW2.png?raw=true" />
				</Course>,
				<Course>
					17.01.2023 r. - Kurs Tworzenia Stron WWW cz. 1 - HTML, CSS, RWD na
					Udemy, prowadzony przez instruktora z MMC School <br />
					<CertificateLink certificateLink="https://github.com/AnnaLukaszczyk/CV-Anna-Lukaszczyk/blob/main/public/certificateWWW1.png?raw=true" />
				</Course>,
			]}
		/>
		<Section
			isMain
			name="Portfolio"
			content={[
				<Description>
					Zapraszam do zapoznania się z <PersonalHomepage />
				</Description>,
			]}
			showIcons={false}
		/>
	</>
);
