export default (worker, _graph) => {
	const runner = (stack, _step) => {
		if (_step === null) { return stack; }

		const _graph = stack[stack.length - 1];
		const { graph, step } = _step(_graph);
		return runner([...stack, graph], step)
	}

	const { graph, step } = worker(_graph);
	return runner([graph], step);
}