const cell = () => ({
	color : 'black',
	walls : [ 'up', 'right', 'down', 'left' ],
	paths : [],
	value : null
});

const row = x => () => new Array(x).fill(null).map(cell);

export default (x, y) => new Array(y).fill(null).map(row(x));