import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../style/cardComponent.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import { spacing } from '@material-ui/system';

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
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Geneva'
      ].join(','),
      htmlFontSize: 24,
      spacing: 4
    },
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#696969',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      }
    }
  });

  return (
    <Card className={classes.card} style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
        <CardMedia
          className={classes.media}
          image={imageSource}
          title={artworkTitle}
        />
        <CardContent >
          <ThemeProvider theme={theme}>
            <Typography component="p" align="center" color="primary">
              {artworkTitle} by {artistName}
            </Typography>
            <Typography component="p" align="center" color="primary">
             {commissionType} - {priceRange}
            </Typography>
            <Typography component="p" align="center" color="primary">
              Artist Availability: {artistAvailability}
            </Typography>
          </ThemeProvider>
        </CardContent>
    </Card>
  );
}
