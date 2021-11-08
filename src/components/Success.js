import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



export class Success extends Component {

    continue= e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back= e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success"></AppBar>
                    <h1>THANK YOU FOR YOUR SUBMISSION</h1>
                    <p>You will get an email with further instructions about your registration.</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
