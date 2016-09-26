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