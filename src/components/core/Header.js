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
          <IconButton>
            <Sort className={classes.appbaricon}/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse 
        in={checked} 
        {...(checked ? {timeout: 2000} : {})} 
        collapsedHeight={15}
      >
        <div className={classes.containertitle}>
          <h1 className={classes.title}>
            Welcome <br/> to <br/>
            Diving<span className={classes.text}>Paradise</span>
          </h1>
          <IconButton>
            <ArrowDropDown className={classes.goDown}/>
          </IconButton>
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
  },
  appbaricon:{
    color: '#000',
    fontSize: '1.5rem',
  },
  appbarcolortext:{
    color: '#008F39',
  },
  containertitle:{
    textAlign: 'center'
  },
  title:{
    color: '#000',
    fontSize: '2.5rem',
  },
  text:{
    color: '#008F39',
    fontSize: '2.5rem',
  },
  goDown:{
    color: '#000',
    fontSize: '3rem',
  },
}))