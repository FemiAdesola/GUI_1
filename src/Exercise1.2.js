import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { green, } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';


function Ap() {
    const [number1, setNumber1] = React.useState(0);
    const [number2, setNumber2] = React.useState(0);
    const [number3, setNumber3] = React.useState(0);
    const [number4, setNumber4] = React.useState(0);
    const [number5, setNumber5] = React.useState(0);
    const [number6, setNumber6] = React.useState(0);
    const [number7, setNumber7] = React.useState(0);
    const [number8, setNumber8] = React.useState(0);
    const [screenvalue, setScreenvalue] = React.useState('00000000');
    const [box, setBox] = React.useState();
    
    const remove = (event) => {
        setBox("");
    }

    //https://www.w3schools.com/js/js_switch.asp
    const updatescreenvalue = (e, bit) => {
        const checked = e.target.checked;
        switch (bit) {

            case 0:
                setNumber1(checked);
                break;
            case 1:
                setNumber2(checked);
                break;
            case 2:
                setNumber3(checked);
                break;
            case 3:
                setNumber4(checked);
                break;
            case 4:
                setNumber5(checked);
                break;
            case 5:
                setNumber6(checked);
                break;
            case 6:
                setNumber7(checked);
                break;
            case 7:
                setNumber8(checked);
        }

        let newScreenvalue = screenvalue.split('');
        checked ? newScreenvalue[bit] = 1 : newScreenvalue[bit] =0;
        setScreenvalue(newScreenvalue.join(''));
        
    }
    const convert = () => setBox(parseInt(screenvalue, 2));
    return (
        <Paper style={{ width: 540, margin: 30, marginTop: 20, padding: 30, textAlign: 'center', }}>
            
            <box style={{ width: 500, margin: 30, marginTop: 5, padding: 10, textAlign: 'center', }}>
                <TextField disabled={true} value={screenvalue} />
            </box>
            
            <Box>
                    
                <Checkbox checked={number1} onChange={(e) => updatescreenvalue(e, 0)}></Checkbox >
                <Checkbox checked={number2} onChange={(e) => updatescreenvalue(e, 1)}></Checkbox >
                <Checkbox checked={number3} onChange={(e) => updatescreenvalue(e, 2)}></Checkbox >
                <Checkbox checked={number4} onChange={(e) => updatescreenvalue(e, 3)}></Checkbox >
                <Checkbox checked={number5} onChange={(e) => updatescreenvalue(e, 4)}></Checkbox >
                <Checkbox checked={number6} onChange={(e) => updatescreenvalue(e, 5)}></Checkbox >
                <Checkbox checked={number7} onChange={(e) => updatescreenvalue(e, 6)}></Checkbox >
                <Checkbox checked={number8} onChange={(e) => updatescreenvalue(e, 7)}></Checkbox >
            </Box>
            <box style={{ width: 500, marginTop: 10, padding: 40, textAlign: 'center', }}>
                <Button variant="contained" color="secondary" onClick={convert}>Converter</Button>
            </box>
            <Box style={{ width: 500, margin: 10, marginTop: 5, padding: 5, textAlign: 'center', }}>
                <TextField id="binarynumber" disabled={true} variant="outlined" value={box} />
            </Box>
            <box style={{display:"block", justifyContent:"center", alignitems:"center", padding: 10,}}>
                    <button variant="contained" color="secondary" onClick={remove}>Remove Numbers</button>
                </box>	
        </Paper>  
    );
}
export default Ap;