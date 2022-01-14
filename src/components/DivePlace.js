import React from 'react';
import { makeStyles } from '@material-ui/core';
import ImageCard from './imageCard';

export default function DivePlace() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
        </div>
    )

};

const useStyles = makeStyles((theme) =>({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
}));