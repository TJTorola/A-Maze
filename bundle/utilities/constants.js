export const DIR_DATA = {
	up: {
		back: 'down',
		delta: [ +0, -1 ]
	},
	down: {
		back: 'up',
		delta: [ +0, +1 ]
	},
	left: {
		back: 'right',
		delta: [ -1, +0 ]
	},
	right: {
		back: 'left',
		delta: [ +1, +0 ]
	}
}

export const COLORS = {
	'unvisited' : '#000',
	'exploring' : '#AAA',
	'spread'    : '#53ff9a'
}

export const DEFAULT_GRADIANT = {
	0   : '#ffffd9',
	12  : '#edf8b1',
	25  : '#c7e9b4',
	37  : '#7fcdbb',
	50  : '#41b6c4',
	62  : '#1d91c0',
	75  : '#225ea8',
	87  : '#253494',
	100 : '#081d58',
}

export const INITIAL_SPEED = 25
export const SPEEDS = [
	1000,
	500,
	250,
	100,
	50,
	25,
	20,
	10,
	5,
	3,
	1
]

export const PHASES = [
	"INTIALIZED",
	"GENERATING",
	"GENERATED",
	"SOLVING",
	"SOLVED"
];