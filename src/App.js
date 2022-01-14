import React from 'react'
//STYLES
import { CssBaseline, makeStyles } from '@material-ui/core';
import './App.css';
//COMPONENTS
import Header from './components/core/Header';
import DivePlace from './components/DivePlace';
//IMAGE
import background from './assets/olas-dive.jpeg'

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <DivePlace/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}))

