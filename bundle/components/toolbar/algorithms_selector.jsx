import React from 'react';
import { connect } from 'react-redux';

import { ALGORITHMS } from 'utilities/constants';

const mapStateToProps = state => ({
	generated: state.phase.generated
});

const mapDispatchToProps = dispatch => ({
	setAlgorithm: algorithm => dispatch({ type: "SET_ALGORITHM", algorithm })
});

const algorithms = props => {
	const { generated, setAlgorithm } = props;
	const list = generated ? ALGORITHMS['solvers'] : ALGORITHMS['generators'];
	setAlgorithm(list[0]);

	return list.map(algorithm => (
		<option value={ algorithm }>
			{ algorithm }()
		</option>
	));
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(props => (
	<select>
		{ algorithms(props) }
	</select>
))