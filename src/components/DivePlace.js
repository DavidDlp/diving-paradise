import React from 'react';
import { makeStyles } from '@material-ui/core';

import ImageCard from './imageCard';
import WindowPosition from '../hook/windowPosition';
import placeData from '../data/place';

export default function DivePlace() {
    const classes = useStyles();
    const checked = WindowPosition('header');

    return (
        <div className={classes.root} id='dive-place'>
            <ImageCard place={placeData[0]} checked={checked}/>
            <ImageCard place={placeData[1]} checked={checked}/>
            <ImageCard place={placeData[2]} checked={checked}/>
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