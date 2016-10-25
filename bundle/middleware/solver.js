import bfSolver from 'lib/workers/solvers/breadthFirst';
import runner from 'lib/workers/runner';

const solve = ({ getState, dispatch }) => {
	const { generation } = getState(),
	      graph = generation[generation.length - 1].graph,
	      solution = runner(bfSolver, graph);
	dispatch({ type: "SET_SOLUTION", solution });
}

export default store => next => action => {
	switch (action.type) {
		case "SOLVE":
			solve(store);
			break;
	}
	return next(action);
}