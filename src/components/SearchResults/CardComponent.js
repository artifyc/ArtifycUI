import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Example from '../../assets/example.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 300,
  },
});

export default function CardComponent() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={Example}
          title="starry_night"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Starry Night {/*Replace with this.props.whatever.the.data.structure.is.title*/}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            by Vincent Van Gogh {/*Replace with this.props.whatever.the.data.structure.is.artist*/}
          </Typography>
          <Typography component="p">
           Full Body - $$ {/*Replace with this.props.whatever.the.data.structure.is.commissionType and .priceRange*/}
          </Typography>
          <Typography component="p">
            Artist Availability:
          </Typography>
          <Typography component="p">
            Open {/*Replace with this.props.whatever.the.data.structure.is.artistAvailability
            Also make the color reactive with open, closed, waitlist*/}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Commission This Artist
        </Button>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
}