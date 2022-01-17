import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import ContactMe from './../ContactMe';

const Footer = () =>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ContactMe/>
            <Typography variant="h6" >
                &copy; DavidDlp "Roma"
            </Typography>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        minHeight: "10vh",
        textAlign: "center",
        background: 'rgba(0,0,0,0.5)',
        color: "#C0C0C0"
    },
}))

export default Footer