import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../../style/artistPortfolio/artistAbout.css';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";

export default function ArtistAbout(props) {
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
      },
    }
  });

var artistName = []
var artistDescription = []
var artistJoinDate = []
var artistOrigin = []
var artistMuse = []
var artistSocialIg = []
var artistSocialTwit = []
var artistSocialTumb = []
var artistSocialFb = []
var artistProfilePic = []

props.data.forEach(function (img) {
      artistName.push(img.artistName);
      artistDescription.push(img.artistDescription);
      artistJoinDate.push(img.joinDate);
      artistOrigin.push(img.origin);
      artistMuse.push(img.muse);
      artistSocialIg.push(img.socialIg);
      artistSocialTwit.push(img.soicalTwit);
      artistSocialTumb.push(img.socialTumb);
      artistSocialFb.push(img.socialFb);
      artistProfilePic.push(img.artistprofilePic);
});

console.log(artistProfilePic)
  return (
    <div>
      <img class="artistProfilePic" src={artistProfilePic[0]} />
      <ThemeProvider theme={theme}>
      <div>
      <Typography component="p" style={{display: 'inline-block'}} color="primary"> {artistName[0]} </Typography>
      </div>
      <div>
      <Typography component="p" style={{display: 'inline-block', textAlign: 'center', marginBottom: '20px'}} color="primary"> {artistDescription[0]} </Typography>
      </div>
      <div class="gray-line"> </div>
      <div>
        <Typography component="p" style={{display: 'inline-block'}} color="primary"> Joined in </Typography> <Typography component="p" style={{display: 'inline-block'}} color="primary"> {artistJoinDate[0]} </Typography>
      </div>
      <div>
        <Typography component="p" style={{display: 'inline-block'}} color="primary"> Origin </Typography> <Typography component="p" style={{display: 'inline-block'}} color="primary"> {artistOrigin[0]}  </Typography>
      </div>
      <div>
        <Typography component="p" style={{display: 'inline-block'}} color="primary"> Response time </Typography> <Typography component="p" style={{display: 'inline-block'}} color="primary"> ~1 hr </Typography>
      </div>
      <div>
        <Typography component="p" style={{display: 'inline-block'}} color="primary"> (Current) Muse </Typography> <Typography component="p" style={{display: 'inline-block'}} color="primary"> {artistMuse[0]}  </Typography>
      </div>
      <div class="gray-line"> </div>
      <div>
      <Typography component="p" style={{display: 'inline-block'}} color="primary"> Social </Typography>
      </div>
      <div>
      <Typography component="p" style={{display: 'inline-block'}} color="primary"> {artistSocialIg[0]}  </Typography>
      </div>
      <div>
      <Typography component="p" style={{display: 'inline-block'}} color="primary"> {artistSocialTwit[0]}  </Typography>
      </div>
      <div>
      <Typography component="p" style={{display: 'inline-block'}} color="primary"> {artistSocialTumb[0]}  </Typography>
      </div>
      <div>
      <Typography component="p" style={{display: 'inline-block'}} color="primary"> {artistSocialFb[0]}  </Typography>
      </div>
      </ThemeProvider>
      <button> Commissions Open </button>
    </div>
  );
}
