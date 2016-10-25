import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	prevPhase: () => dispatch({ type: "JUMP_BACK" })
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
)(({ prevPhase }) => (
	<span>
		<Icon i="step_backward" onClick={ prevPhase } />
	</span>
))