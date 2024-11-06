import { Section } from "../../common/Section";
import { Description, StyledMain } from "./styled";
import { CertyficateLink, PersonalHomepage } from "../../common/Links";
import { List } from "../../common/List";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { MobileSmallAnimation } from "../MobileSmallAnimation";

export const Main = () => {
	const [isMobileSmall, setIsMobileSmall] = useState(false);

	const handleResize = () => {
		setIsMobileSmall(window.innerWidth < 366);
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<StyledMain>
			{isMobileSmall ? (
				<MobileSmallAnimation />
			) : (
				<>
					<Section
						isMain
						name="O mnie"
						content={[
							<Description>
								Od 1,5 roku interesuję się programowaniem, a moim sercem
								zawładnął frontend. Brak możliwości rozwoju w poprzedniej pracy
								skłonił mnie do zmiany branży: nie lubię tkwić w miejscu, a w
								każdym wyzwaniu widzę możliwości rozwoju. Uważam, że nie ma
								problemu, którego nie da się rozwiązać. Dążę do pracy w
								dynamicznym zespole, w którym mogłabym wykorzystać swoje
								umiejętności analityczne i kreatywność.
							</Description>,
						]}
						showIcons={false}
					/>
					<Section
						isMain
						name="Doświadczenie"
						content={[
							<div>
								<Description>
									28.05.2007 r. - 09.06.2023 r. - Funkcjonariusz Straży Granicznej, ostatnie zajmowane stanowisko: Specjalista Zespołu Kontroli Ruchu Granicznego Grupy Granicznej Placówki SG w Dołhobyczowie:
								</Description>
								<List
									items={[
										"zarządzanie i analiza dokumentacji oraz raportów, wyszukiwanie błędów z odprawy osób oraz pojazdów, co wymagało wysokiej dokładności i skrupulatności",
										"rozwiązywanie problemów w szybko zmieniającym się środowisku, co wymagało umiejętności logicznego myślenia i skutecznego podejmowania decyzji",
										"współpraca w zespole, organizacja działań oraz zarządzanie czasem i priorytetami w celu osiągnięcia wyznaczonych celów",
										"współpraca z innymi służbami i instytucjami",
									]}
									isMain
									customIcon={faPlay}
								/>
							</div>
						]}
					/>
					<Section
						isMain
						name="Wykształcenie"
						content={[
							"06.11.2010 r. - Wyższa Szkoła Ekonomii i Innowacji w Lublinie - Wydział Administracji - magister",
						]}
					/>
					<Section
						isMain
						name="Kursy"
						content={[
							<span>
								01.10.2024 r. - Kurs Frontend Developer od podstaw -{" "}
								<CertyficateLink />
							</span>,
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
			)}
		</StyledMain>
	);
};
