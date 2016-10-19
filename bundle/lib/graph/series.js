import * as progress from './progress';

export default (steps, initialGraph) => {
	const takeStep = (graph, step) => {
		const [funcName, ...args] = step;
		return progress[funcName](graph, ...args);
	}

	return steps.reduce(takeStep, initialGraph);
}