import { CssBaseline } from '@mui/material';
import { makeStyles, ThemeProvider } from '@mui/styles';
import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { createTheme } from '@mui/material/styles';
import Employees from '../pages/Employee/Employees';
import './App.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
        light: '#42a5f5'
      },
      secondary: {
        main: '#9c27b0',
        light: '#ba68c8'
      },
      background:{
        default: '#f2f2f2'
      }
    },
    override:{
      MuiAppBar:{
        root: {
          transform: 'translateZ(0)'
        }
      }
    },
    props:{
      MuiIconButton:{
        disableRipple: true,
      }
    }
});

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width: '100%'
  }
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
        <Employees/>
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
