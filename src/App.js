import React from 'react'
//STYLES
import { CssBaseline, makeStyles } from '@material-ui/core';
import './App.css';
//COMPONENTS
import Header from './components/core/Header';
import DivePlace from './components/DivePlace';
//IMAGE
import background from './assets/image-background.jpeg'
import Footer from './components/core/Footer';

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <DivePlace/>
      <Footer/>
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

