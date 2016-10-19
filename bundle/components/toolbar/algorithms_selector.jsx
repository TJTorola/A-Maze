import React from 'react';
import { connect } from 'react-redux';

import { ALGORITHMS } from 'utilities/settings';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	setAlgorithm: algorithm => dispatch({ type: "SET_ALGORITHM", algorithm })
});

const algorithms = props => {
	const { generated, setAlgorithm } = props;
	const list = generated ? ALGORITHMS['solvers'] : ALGORITHMS['generators'];

	return list.map((algorithm, id) => (
		<option value={ algorithm } key={ id }>
			{ algorithm }()
		</option>
	));
}
8
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(props => (
	<select>
		
	</select>
))