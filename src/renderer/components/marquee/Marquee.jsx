import M from "./MarqueeStyles";
import Anime from "react-anime";

export default function Marquee({ children }) {
	return (
		<M.MainContainer>
			<Anime
				loop={true}
				easing="linear"
				duration={5000}
				direction="normal"
				translateX="-100%"
			>
				<M.Moving>
					{children}
				</M.Moving>
			</Anime>
		</M.MainContainer>
	);
}