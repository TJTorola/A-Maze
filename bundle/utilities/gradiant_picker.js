import { DEFAULT_GRADIANT } from './settings';

const toPercent = (value, max) => {
	if (value >= max) { return 100; }
	if (value <= 0) { return 0; }

	return value / max * 100;
}

const getBounds = (percent, gradiant) => {
	const bounds = Object
		.keys(gradiant)
		.map(bound => +(bound))
		.sort((left, right) => +(left > right));

	let [lower, upper] = [null, null];
	let bound;

	for (let i = 0; i < bounds.length; i++) {
		bound = bounds[i];

		lower = upper;
		upper = bound;

		if (upper >= percent) {
			return { lower, upper };
		}
	}

	lower = upper;
	upper = null;
	return { lower, upper };
}

const getRatio = (percent, bounds) => {
	const diff = bounds['upper'] - bounds['lower'];
	return (percent - bounds['lower']) / diff;
}

const hexToRgb = hex => {
	hex = hex.length === 4 ? hex + hex.slice(1,4) : hex;
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

	return {
		r : parseInt(result[1], 16),
		g : parseInt(result[2], 16),
		b : parseInt(result[3], 16)
	};
}

const decToHex = dec => {
	const hex = dec.toString(16)
	return hex.length === 1 ? "0" + hex : hex;
}

const rgbToHex = rgb => (
	`#${decToHex(rgb['r'])}${decToHex(rgb['g'])}${decToHex(rgb['b'])}`
)

const getRgb = (lower, upper, ratio) => {
	const rgb = {};

	let diff, dec;
	['r', 'g', 'b'].forEach(c => {
		diff = upper[c] - lower[c];
		dec = lower[c] + (diff * ratio);
		dec = Math.round(dec);

		rgb[c] = dec;
	});

	return rgb;
}

export default (max = 100, gradiant = DEFAULT_GRADIANT) => value => {
	const percent = toPercent(value, max);
	const { lower, upper } = getBounds(percent, gradiant);
	if (lower === null) { return gradiant[upper]; }
	if (upper === null) { return gradiant[lower]; }

	const lowerRgb = hexToRgb(gradiant[lower]);
	const upperRgb = hexToRgb(gradiant[upper]);

	const ratio = getRatio(percent, {lower, upper});

	const rgb = getRgb(lowerRgb, upperRgb, ratio);
	return rgbToHex(rgb);
}