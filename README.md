![Solved Maze](docs/solvedShot.png)

# A-Maze

**Maze Generation and solution algorithms visualized.**

## Frameworks

A-Maze uses React.js and Redux to manage user controls. It uses ES6 and functional programming techniques to handle graph and canvas rendering logic.

## Features

### Immutable graph array

All of the maze generation and solution algorithms are built in the following streaming structure.

```javascript
const step = (graph, start) => {
	// appropriate stepping logic

	return {
		step  : step(...),
		graph : newGraph
	}
}
```

This format allows you to take any worker function and run it through a recursive function that can accumulate as many steps of the graph as you like. With the following function I run any worker until every step has been taken and return a three dimensonal array (2 spatial, 1 temporal) that can later be iterated through and rendered.

```javascript
export default (worker, _graph) => {
	const runner = (stack, _step) => {
		if (_step === null) { return stack; }

		const _graph = stack[stack.length - 1];
		const { graph, step, diff } = _step(_graph);
		return runner([...stack, { graph, diff }], step);
	}

	const { graph, step, diff } = worker(_graph);
	return runner([{ graph, diff }], step);
}
```

**Notes:**
- There is no tail-call recursion so in practice I acually use an imparitive approach with a while loop to avoid stack overflow errors.
- Cell diffs are returned and stored along with graphs to allow optimized rendering.
- Because of the immutable nature of the graphs a minimal amount of memory, representing only what has changed and parental pointers, is used from one step to the next.

**Benefits**
- Total seperation of graph logic from timing logic.
- You know what step you are on as you move through the algorithm in relation to its end.
- Ability to traverse the algorithm in reverse or jump to any point in the algorithm at any time.

**Drawbacks**
- This frontloading of the generation becomes problematically long with larger graphs.
- Though memory usage is minimized, it can still become excessive with larger graphs.

You could avoid these drawbacks by either generating the graph as you need it and rendering it step by step. Or as I decided, keeping the graph resolution low enough that the performance issues don't arise.