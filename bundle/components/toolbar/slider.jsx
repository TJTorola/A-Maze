import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';

const mapStateToProps = state => ({
	max : state.phase.length - 1,
	step : state.step || 0
});

const mapDispatchToProps = dispatch => ({
	set  : step => dispatch({ type: "SET_STEP", step }),
	stop : () => dispatch({ type: "STOP" })
});

const handleSlide = set => e => {
	const step = +e.currentTarget.value;
	set(step);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(({ step, max, stop, set }) => (
	<input type="range" 
		max={ max } 
		value={ step }
		onMouseDown={ stop }
		onChange={ handleSlide(set) } />
))