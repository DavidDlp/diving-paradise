import React from 'react';
import {  
    Card, 
    CardActionArea,  
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
            <CardContent className={classes.content}>
              <Typography 
                  className={classes.title}
                  gutterBottom 
                  variant="h5" 
                  component="h2"
              >
                <a href={place.link} target="_blank" rel="noopener noreferrer">
                  {place.title}
                </a>
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
        height: 250,
      },
      content:{
        minHeight: 270,
      },
      title:{
        "& a": {
          textDecoration: "none",
          fontWeight: 'bold',
          fontSize: '1.5rem',
          color: '#C0C0C0',
        },
        "& a:hover":{
          color: "gold",
          zoom: 1.1,
        }, 
      },
      description:{
        fontSize: '0.8rem',
        color: '#ddd'
      },
}));