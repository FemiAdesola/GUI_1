import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';




function App() {
    const [firstname, setFirstname] = React.useState('');
    const [middlename, setMiddlename] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [checkedmiddlename, setcheckedMiddlename] = React.useState(true);

    const updateFirstname= (event) => {
        setFirstname(event.target.value);
    };

    const updateMiddlename= (event) => {
        setMiddlename(event.target.value);
    };

    const updateLastname= (event) => {
        setLastname(event.target.value);
    };
    const handleChange = (event) => {
        setcheckedMiddlename(event.target.checkedmiddlename)
    };
    const remove = (event) => {
        setFirstname("");
        setMiddlename("");
        setLastname("");
    };

    const autoFill = (event) => {
        setFirstname("Femi");
        setMiddlename("Adesola");
        setLastname("Oyinloye");
    };
        return (
            <Paper style={{ width: 500, margin: 30, marginTop: 50, padding: 50, textAlign: 'center', }}>
               <box style={{display:"block", justifyContent:"center", alignitems:"center", padding: 10,}}>
                    <FormControl variant="filled">
                        <FormLabel component="legend">First name <TextField id="firstname" value={firstname} onChange={updateFirstname} /></FormLabel>
                    </FormControl>
                
                    <FormControl variant="filled">
                        <FormLabel component="legend">Middle name <TextField id="middlename" value={middlename} onChange={updateMiddlename} disabled={checkedmiddlename }/></FormLabel>
                    </FormControl>
                    <box style={{display:"block", justifyContent:"center", alignitems:"center", padding: 10,}}>
                        <FormControlLabel control={
                            <Checkbox onChange={handleChange} checked={checkedmiddlename} />} label="Middle name"
                       />
                    </box>
                 
                    <FormControl variant="filled">
                        <FormLabel component="legend">Last name <TextField id="lastname" value={lastname} onChange={updateLastname} /></FormLabel>
                    </FormControl>
                </box>
                <box style={{display:"block", justifyContent:"center", alignitems:"center", padding: 10,}}>
                    <button variant="contained" color="secondary" id={"autofill"} onClick={autoFill}>
                        Autofill
                </button>
                </box>
                <box style={{display:"block", justifyContent:"center", alignitems:"center", padding: 10,}}>
                    <button variant="contained" color="secondary" onClick={remove}>Remove</button>
                </box>
            

            </Paper>
           
        );
    
    
    }

export default App;
