import React from 'react';
import { 
    Button, 
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia, 
    makeStyles, 
    Typography 
} from '@material-ui/core';
import island from './../assets/lanzarote.jpeg'

export default function ImageCard() {
    const classes = useStyles();

    return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={island}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography 
            className={classes.title}
            gutterBottom 
            variant="h5" 
            component="h2"
          >
            Lizard
          </Typography>
          <Typography 
            className={classes.description}
            variant="body2" 
            color="textSecondary" 
            component="p"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    )

};

const useStyles = makeStyles((theme) =>({
    root: {
        maxWidth: 375,
        background: 'rgba(0,0,0,0.5)',
        margin: '10px',
      },
      media: {
        height: 120,
      },
      title:{
        fontFamily: 'Lobster',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#fff'
      },
      description:{
        fontSize: '0.7rem',
        color: '#ddd'
      },
}));