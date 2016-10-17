import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({
	disabled : state.goingFastest || state.phase.solved
});

const mapDispatchToProps = dispatch => ({
	faster  : () => dispatch({ type: "FASTER" })
});

const className = disabled => {
	if (disabled) {
		return 'is-disabled';
	} else {
		return '';
	}
}

const blocker = (callback, block) => () => {
	if (block) { () => {} }
	else { callback(); }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(({ disabled, faster }) => (
	<span>
		<Icon i="fast_forward"
			className={ className(disabled) }
			onClick={ blocker(faster, disabled) } />
	</span>
))