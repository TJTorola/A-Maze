import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({
	goingSlowest: state.goingSlowest
});

const mapDispatchToProps = dispatch => ({
	slower  : () => dispatch({ type: "SLOWER" })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(props => (
	<span>
		<Icon i="fast_backward"
			className={ props.goingSlowest ? 'is-disabled' : '' }
			onClick={ props.slower } />
	</span>
))