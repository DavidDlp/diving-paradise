import React from 'react';
import { 
    Button, 
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Collapse, 
    makeStyles, 
    Typography 
} from '@material-ui/core';

export default function ImageCard({place, checked}) {
    const classes = useStyles();

    return (
    <Collapse 
      in={checked} 
      {...(checked ? {timeout: 1000} : {})} 
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={place.image}
            title="The dive place"
          />
          <CardContent>
            <Typography 
              className={classes.title}
              gutterBottom 
              variant="h5" 
              component="h2"
            >
              {place.title}
            </Typography>
            <Typography 
              className={classes.description}
              variant="body2" 
              color="textSecondary" 
              component="p"
            >
              {place.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Collapse>
    )

};

const useStyles = makeStyles((theme) =>({
    root: {
        maxWidth: 475,
        background: 'rgba(0,0,0,0.5)',
        margin: '10px',
      },
      media: {
        height: 300,
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