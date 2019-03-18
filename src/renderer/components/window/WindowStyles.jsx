import styled from "styled-components";
import theme from "../../util/theme";
import color from "../../util/color";

const titleBarHeight = "30px";
const titleBarColor = color.emphasize(theme.dark, 5);
const titleBarHoverColor = color.emphasize(titleBarColor, 5);
const titleBarFillColor = color.emphasize(theme.light, 10);

const MainContainer = styled.div`
	width: 100%;
	height: 100%;
`;

const TitleBar = styled.div`
	width: 100%;
	height: ${titleBarHeight};
	background: ${titleBarColor};
	position: relative;
	-webkit-app-region: drag;
`;

const Branding = styled.div`
	width: ${titleBarHeight};
	height: ${titleBarHeight};
	position: absolute;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Logo = styled.img`
	width: 80%;
	height: 80%;
`;

const Title = styled.div`
	height: 100%;
	color: ${titleBarFillColor};
	position: absolute;
	left: calc(${titleBarHeight} + 5px);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(${titleBarHeight} / 2.2);
`;

const ButtonGroup = styled.div`
	width: 130px;
	height: 100%;
	position: absolute;
	right: 0;
	-webkit-app-region: no-drag;
`;

const Button = styled.button`
	width: calc(100% / 3);
	height: 100%;
	background: none;
	border: none;
	outline: none;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.08s;
	float: left;
	fill: ${titleBarFillColor};

	&:hover {
		background: ${titleBarHoverColor};
	}

	& > svg {
		width: 38%;
		height: 38%;
	}
`;

const CloseButton = styled(Button)`
	&:hover {
		background: ${theme.primary};
	}
`;

const PageContainer = styled.div`
	width: 100%;
	height: calc(100% - ${titleBarHeight});
`;

export default {
	MainContainer,
	TitleBar,
	Branding,
	Logo,
	Title,
	ButtonGroup,
	Button,
	CloseButton,
	PageContainer
};