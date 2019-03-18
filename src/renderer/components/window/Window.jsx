import W from "./WindowStyles";
import { remote } from "electron";
import { useState } from "react";
import { prependOnceListener } from "cluster";

const { BrowserWindow } = remote;

export default function Window(props) {
	const [maximized, setMaximized] = useState(false);

	const { children, title, logo } = props;

	const onCloseClick = () => BrowserWindow.getFocusedWindow().close();
	const onMinimizeClick = () => BrowserWindow.getFocusedWindow().minimize();
	const onUnmaximizeClick = () => BrowserWindow.getFocusedWindow().unmaximize();
	const onMaximizeClick = () => {
		BrowserWindow.getFocusedWindow()
			.once("unmaximize", () => {
				setMaximized(false);
			})
			.maximize();
		setMaximized(true);
	};

	return (
		<W.MainContainer>
			<W.TitleBar>
				<W.Branding>
					<W.Logo src={logo}/>
				</W.Branding>
				<W.Title>
					{title}
				</W.Title>
				<W.ButtonGroup>
					<W.Button onClick={onMinimizeClick}>
						<svg x="0px" y="0px" viewBox="0 0 10.2 1">
							<rect className="rect" width="10.2" height="1"/>
						</svg>
					</W.Button>
					{ maximized ?
						<W.Button onClick={onUnmaximizeClick}>
							<svg x="0px" y="0px" viewBox="0 0 10.2 10.2">
								<path
									d="M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z"
								/>
							</svg>
						</W.Button>
						:
						<W.Button onClick={onMaximizeClick}>
							<svg x="0px" y="0px" viewBox="0 0 10.2 10.1">
								<path
									d="M0,0v10.1h10.2V0H0z M9.2,9.2H1.1V1h8.1V9.2z"
								/>
							</svg>
						</W.Button>
					}
					<W.CloseButton onClick={onCloseClick}>
						<svg x="0px" y="0px" viewBox="0 0 10.2 10.2">
							<polygon
								points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 "
							/>
						</svg>
					</W.CloseButton>
				</W.ButtonGroup>
			</W.TitleBar>
			<W.PageContainer>
				{children}
			</W.PageContainer>
		</W.MainContainer>
	);
}