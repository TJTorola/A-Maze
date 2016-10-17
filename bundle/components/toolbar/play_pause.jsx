import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({
	playing : state.playing,
	phase   : state.phase
});

const mapDispatchToProps = dispatch => ({
	play  : () => dispatch({ type: "PLAY" }),
	pause : () => dispatch({ type: "PAUSE" })
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
			className={ className(props.phase) }
			onClick={ playPause(props) } />
	</span>
))