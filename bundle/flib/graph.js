const newCell = () => ({
	status : [ 'unvisited' ],
	walls  : [ 'up', 'right', 'down', 'left' ],
	paths  : [],
	value  : null,
});

const newRow = x => (
	new Array(x).fill(null).map(newCell)
)
const newGrid = (x, y) => (
	new Array(y)
		.fill(null)
		.map(newRow.bind(null, x))
)

export default context => {
	
}