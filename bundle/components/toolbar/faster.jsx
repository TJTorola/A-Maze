import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({
	goingFastest : state.goingFastest,
	solved       : state.phase.solved
});

const mapDispatchToProps = dispatch => ({
	faster  : () => dispatch({ type: "FASTER" })
});

const className = props => {
	const { goingFastest, solved } = props;
	if (solved || goingFastest) {
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
		<Icon i="fast_forward"
			className={ className(props) }
			onClick={ props.faster } />
	</span>
))