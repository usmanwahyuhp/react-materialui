import React, { Component } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import './App.css'
import NavBar from './components/NavBar';
import Grid from './components/Grid';

import GitHubIcon from '@material-ui/icons/GitHub';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const theme = createMuiTheme({
    palette: {
      primary: {
        main:"#2e1667",
      },
      secondary: {
        main:"#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
        },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  });


export default class App extends Component {
  render() {
    const classes = ({
      wrapper: {
        width: "65%",
        margin: "auto",
        textAlign: "center"
      },
      bigSpace: {
        marginTop: "5rem"
      },
      littleSpace:{
        marginTop: "2.5rem",
      },
      grid:{
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap", 
      },
  })
    return (
      <div className="App">
            <ThemeProvider theme={theme}>
                <NavBar />

                <div style={{...classes.grid, ...classes.bigSpace}}>
                  <Grid icon={<GitHubIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="GitHub" btnTitle="Show me More" />
                  <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More"/>
                  <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Performant" btnTitle="Show me More"/>
                </div>
            </ThemeProvider>
        </div>
    )
  }
}
