import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	nextPhase: () => dispatch({ type: "JUMP_FORWARD" })
});

const className = phase => {
	if (phase.solved) {
		return 'is-disabled';
	} else {
		return '';
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(({ nextPhase }) => (
	<span>
		<Icon i="step_forward" onClick={ nextPhase } />
	</span>
))