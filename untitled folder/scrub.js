const cleanCell = cell => ({
	status : [],
	walls  : cell.walls,
	paths  : [],
	value  : null
});
export default graph => graph.map(row => row.map(cleanCell));