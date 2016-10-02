import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({
	playing: state.playing
});

const mapDispatchToProps = dispatch => ({
	play  : () => dispatch({ type: "PLAY" }),
	pause : () => dispatch({ type: "PAUSE" })
});

const playPause = props => () => {
	if (props.playing) {
		props.pause();
	} else {
		props.play();
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(props => (
	<span>
		<Icon i={ props.playing ? 'pause' : 'play' } 
			onClick={ playPause(props) } />
	</span>
))