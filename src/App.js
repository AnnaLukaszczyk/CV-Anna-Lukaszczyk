import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Wrapper } from "./features/Wrapper";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Wrapper />
		</ThemeProvider>
	);
}

export default App;
