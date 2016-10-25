import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({
	playing : state.playback.playing
});

const mapDispatchToProps = dispatch => ({
	play : () => dispatch({ type: "PLAY" }),
	stop : () => dispatch({ type: "STOP" })
});

const className = phase => {
	if (phase.solved) {
		return 'is-disabled';
	} else {
		return '';
	}
}

const playPause = props => () => {
	if (props.playing) {
		props.stop();
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
			className="play-pause"
			onClick={ playPause(props) } />
	</span>
))