import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	slower  : () => dispatch({ type: "SLOWER" })
});

const className = props => {
	const { goingSlowest, solved } = props;
	if (solved || goingSlowest) {
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
		<Icon i="fast_backward" />
	</span>
))