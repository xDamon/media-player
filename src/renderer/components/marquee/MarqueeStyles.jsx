import styled from "styled-components";
import color from "../../util/color";
import theme from "../../util/theme";

const MainContainer = styled.div`
	width: 110%;
	height: 100%;
	background: ${color.emphasize(theme.dark, 7)};
`;

const Moving = styled.span`
	width: 100%;
	height: 100%;
	color: ${theme.light}
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export default {
	MainContainer,
	Moving
};