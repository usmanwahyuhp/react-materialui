import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import './App.css'
import CustomBtn from './components/CustomBtn';

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

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CustomBtn/>
            </ThemeProvider>
        </div>
    )
}

export default App
