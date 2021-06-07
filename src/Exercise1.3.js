import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

function A() {
	const [clickMessage, setClickMessage] = React.useState("");
	const [moveMessage, setMoveMessage] = React.useState("");
	const [wheelMessage, setWheelMessage] = React.useState("");
	
	const clickUpdate = (event) => {
		setClickMessage("Mouse was clicked: button " + event.buttons);
	}
	
	const moveUpdate = (event) => {
		setMoveMessage("Mouse moved to " + event.clientX + ", " + event.clientY);
	}
	
	const wheelUpdate = (event) => {
		setWheelMessage("Wheel moved " + event.deltaY);
	}
	
	return (
		<Box onMouseDown={clickUpdate} onMouseMove={moveUpdate} onWheel={wheelUpdate}>
			<Paper style={{width: 560, margin:'30px', padding:'20px', textAlign: 'center',}}>
				<Box><TextField id={"clickMessage"} disabled={true} variant="outlined" fullWidth value={clickMessage} /></Box>
				<Box><TextField id={"moveMessage"} disabled={true} variant="outlined" fullWidth value={moveMessage} /></Box>
				<Box><TextField id={"wheelMessage"} disabled={true} variant="outlined" fullWidth value={wheelMessage} /></Box>
			</Paper>
		</Box>
	);
}

export default A;
