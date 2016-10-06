import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({
	phase: state.phase
});

const mapDispatchToProps = dispatch => ({
	stepBackward: () => dispatch({ type: "STEP_BACKWARD" })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(props => (
	<span>
		<Icon i="step_backward"
			className={ props.phase === 'initial' ? 'is-disabled' : '' }
			onClick={ props.stepBackward } />
	</span>
))