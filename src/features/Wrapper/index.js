import { StyledWrapper } from "./styled";
import { Header } from "../Header";
import { Main } from "../Main";
import { Aside } from "../Aside";
import { Footer } from "../Footer";

export const Wrapper = ({ children, isFirstPage }) => (
	<StyledWrapper>
		<Header />
		<Main>{children}</Main>
		<Aside />
		<Footer isFirstPage={isFirstPage} />
	</StyledWrapper>
);
