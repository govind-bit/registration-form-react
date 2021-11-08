import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



export class FormUserDetails extends Component {

    continue= e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"></AppBar>
                    <TextField hintText="Enter your first name" 
                    floatingLabelText="First Name" onChange= {handleChange('firstName')}
                    defaultValue = {values.firstName}></TextField>
                    <br/>
                    <TextField hintText="Enter your Last name" 
                    floatingLabelText="Last Name" onChange= {handleChange('lastName')}
                    defaultValue = {values.lastName}></TextField>
                    <br/>
                    <TextField hintText="Enter your Email" 
                    floatingLabelText="Email" onChange= {handleChange('email')}
                    defaultValue = {values.email}></TextField>
                    <br/>
                    <RaisedButton label="Continue" primary={true}
                    style={StyleSheet.button} onClick={this.continue} ></RaisedButton>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles= {
    button:{
        margin: 15
    }
}

export default FormUserDetails
