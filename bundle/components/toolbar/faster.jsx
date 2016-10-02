import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({
	goingFastest: state.goingFastest
});

const mapDispatchToProps = dispatch => ({
	faster  : () => dispatch({ type: "FASTER" })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(props => (
	<span>
		<Icon i="fast_forward"
			className={ props.goingFastest ? 'is-disabled' : '' }
			onClick={ props.faster } />
	</span>
))