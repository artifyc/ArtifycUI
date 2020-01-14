import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../../style/searchReturn/cardComponent.css";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import {spacing} from "@material-ui/system";
import green from "@material-ui/core/colors/green";

const useStyles = makeStyles({
  card: {
    maxWidth: 250
  },
  media: {
    height: 300
  }
});

export default function CardComponent({
  artworkTitle,
  artistName,
  commissionType,
  priceRange,
  artistAvailability,
  imageSource,
  tags
}) {
  const classes = useStyles();
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Geneva"].join(","),
      htmlFontSize: 24,
      spacing: 4
    },
    palette: {
      primary: {
        main: "#696969"
      }
    }
  });

  var availabilityColor = "black";

  return (
    <Card
      className={classes.card}
      id="card"
      style={{backgroundColor: "transparent", boxShadow: "none"}}
    >
      <CardMedia
        className={classes.media}
        image={imageSource}
        title={artworkTitle}
      />
      <CardContent>
        <ThemeProvider theme={theme}>
          <Typography component="p" align="center" color="primary" id="title">
            {artworkTitle} by {artistName}
          </Typography>
          <Typography component="p" align="center" color="primary">
            {commissionType} - {priceRange}
          </Typography>
          <Typography
            component="p"
            align="center"
            color="primary"
            style={{display: "inline-block"}}
          >
            Artist Availability:
          </Typography>
          {artistAvailability == "Open" ? (
            <Typography
              component="p"
              align="center"
              style={{display: "inline-block"}}
            >
              {" "}
              <font color="#04af70"> &nbsp;{artistAvailability} </font>{" "}
            </Typography>
          ) : null}
          {artistAvailability == "Closed" ? (
            <Typography
              component="p"
              align="center"
              style={{display: "inline-block"}}
            >
              {" "}
              <font color="#7f0000"> &nbsp;{artistAvailability} </font>{" "}
            </Typography>
          ) : null}
          {artistAvailability == "Waitlist" ? (
            <Typography
              component="p"
              align="center"
              style={{display: "inline-block"}}
            >
              {" "}
              <font color="#cc8400"> &nbsp;{artistAvailability} </font>{" "}
            </Typography>
          ) : null}
        </ThemeProvider>
      </CardContent>
    </Card>
  );
}
