// // Sidelined until most browsers support tail call optimization :(
// export default (worker, _graph) => {
// 	const runner = (stack, _step) => {
// 		if (_step === null) { return stack; }

// 		const _graph = stack[stack.length - 1];
// 		const { graph, step, diff } = _step(_graph);
// 		return runner([...stack, { graph, diff }], step);
// 	}

// 	const { graph, step, diff } = worker(_graph);
// 	return runner([{ graph, diff }], step);
// }

export default (worker, _graph) => {
	let { graph, step, diff } = worker(_graph);
	let stack = [{ graph, diff }];

	let next;
	while (step !== null) {
		next  = step(graph);
		step  = next.step;
		graph = next.graph;
		diff  = next.diff

		stack = [...stack, { graph, diff }];
	}
	return stack;
}