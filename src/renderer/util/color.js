import tinycolor from "tinycolor2";
import theme from "./theme";

function emphasize(base, amount = 10) {
	const color = tinycolor(base);
	const isLight = color.isLight();

	return (isLight ?
		color.darken(amount) :
		color.lighten(amount)).toHexString();
}

function emphasizeText(base) {
	const color = tinycolor(base);
	const isLight = color.isLight();

	return isLight ? theme.dark : theme.light;
}

export default {
	emphasize,
	emphasizeText
};