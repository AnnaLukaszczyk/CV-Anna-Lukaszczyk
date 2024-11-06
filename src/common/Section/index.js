import { List } from "../List";
import { SectionTitle, SectionTitleShadow, StyledSection } from "./styled";

export const Section = ({ name, isMain, content, showIcons = true }) => (
	<StyledSection>
			<SectionTitleShadow>
				<SectionTitle $isMain={isMain}>{name}</SectionTitle>
			</SectionTitleShadow>
		<List items={content} isMain={isMain} showIcons={showIcons} />
	</StyledSection>
);