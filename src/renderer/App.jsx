import A from "./AppStyles";
import React from "react";
import GlobalStyle from "./GlobalStyle";
import Window from "./components/window/Window";
import Marquee from "./components/marquee/Marquee";
import logo from "../../assets/logo.png";

export default function App() {
	return (
		<React.Fragment>
			<GlobalStyle/>
			<Window title="Media Player" logo={logo}>
				<A.Container
					width="100%"
					height="20px"
				>
					<Marquee>
						Test
					</Marquee>
				</A.Container>
			</Window>
		</React.Fragment>
	);
}