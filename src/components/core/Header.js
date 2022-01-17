import React, { useEffect, useState } from 'react'
import { 
    AppBar, 
    Collapse, 
    IconButton, 
    makeStyles,
    Toolbar, 
} from '@material-ui/core';
import Sort from '@material-ui/icons/Sort';
import { ArrowDropDown } from '@material-ui/icons';
import { Link as Scroll } from 'react-scroll'


export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() =>{
    setChecked(true);
  }, [])

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarwrapper}>
          <h1 className={classes.appbartitle}>
            Diving<span className={classes.appbarcolortext}>Paradise</span>
          </h1>
          <Scroll to="header" smooth={true}>
            <IconButton>
              <Sort className={classes.appbaricon}/>
            </IconButton>
          </Scroll>
        </Toolbar>
      </AppBar>

      <Collapse 
        in={checked} 
        {...(checked ? {timeout: 2000} : {})} 
      >
        <div className={classes.containertitle}>
          <h1 className={classes.title}>
            Welcome <br/> to <br/>
            Diving<span className={classes.text}>Paradise</span>
          </h1>
          <Scroll to="dive-place" smooth={true}>
            <IconButton>
              <ArrowDropDown className={classes.goDown}/>
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  appbar:{
    background: 'none',
  },
  appbarwrapper:{
    width: '80%',
    margin: '0 auto',
  },
  appbartitle:{
    color: '#000',
    flexGrow: '1',
    fontSize: '1.5rem',
  },
  appbaricon:{
    color: '#000',
    fontSize: '2rem',
  },
  appbarcolortext:{
    color: '#C0C0C0',
  },
  containertitle:{
    textAlign: 'center'
  },
  title:{
    color: '#000',
    fontSize: '2.5rem',
  },
  text:{
    color: '#C0C0C0',
    fontSize: '2rem',
  },
  goDown:{
    color: '#000',
    fontSize: '3rem',
  },
}))