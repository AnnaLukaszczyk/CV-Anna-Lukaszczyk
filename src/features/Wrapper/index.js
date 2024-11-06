import { StyledWrapper } from "./styled";
import { Header } from "../Header";
import { Main } from "../Main";
import { Aside } from "../Aside";
import { Footer } from "../Footer";

export const Wrapper = () => (
	<StyledWrapper>
		<Header />
		<Main />
		<Aside />
		<Footer />
	</StyledWrapper>
);
