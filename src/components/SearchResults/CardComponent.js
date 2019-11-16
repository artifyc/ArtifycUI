import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 300,
  },
});

export default function CardComponent({artworkTitle, artistName, commissionType, priceRange, artistAvailability, imageSource}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={imageSource}
          title={artworkTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {artworkTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            by {artistName}
          </Typography>
          <Typography component="p">
           {commissionType} - {priceRange}
          </Typography>
          <Typography component="p">
            Artist Availability: {artistAvailability}
          </Typography>
        </CardContent>
    </Card>
  );
}