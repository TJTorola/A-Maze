import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({
	playing: state.playing
});

const mapDispatchToProps = dispatch => ({
	play: () => dispatch({ type: "PLAY" })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(props => (
	<nav>
		<Icon i="step_backward" />
		<Icon i="fast_backward" />

		<Icon i={ props.playing ? 'pause' : 'play' } 
			onClick={ props.play } />

		<Icon i="fast_forward" />
		<Icon i="step_forward" />
	</nav>
))