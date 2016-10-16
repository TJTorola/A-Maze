import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({
	phase: state.phase
});

const mapDispatchToProps = dispatch => ({
	stepForward: () => dispatch({ type: "STEP_FORWARD" })
});

const className = phase => {
	if (phase.generated && phase.working) {
		return 'is-disabled';
	} else {
		return '';
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(props => (
	<span>
		<Icon i="step_forward"
			className={ className(props.phase) }
			onClick={ props.stepForward } />
	</span>
))