import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({
	phase: state.phase
});

const mapDispatchToProps = dispatch => ({
	stepBackward: () => dispatch({ type: "STEP_BACKWARD" })
});

const className = phase => {
	if (phase.generated || phase.working) {
		return '';
	} else {
		return 'is-disabled';
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(props => (
	<span>
		<Icon i="step_backward"
			className={ className(props.phase) }
			onClick={ props.stepBackward } />
	</span>
))