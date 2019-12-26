import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';


export default function ArtistAcclaim(props) {

  var reviews = []
  props.data.forEach(function (img) {
        reviews.push(img.artistAcclaim);
  });



  reviews = reviews[0]
  console.log(reviews)
  var reviews2 = [{"reviewer": "Kyle", "reviewDate": "hi"}, {"reviewer": "Allison"}]
  console.log(reviews2)
  return (
    <div>
    <p> Acclaim for sabimaki </p>
    <div>
      {reviews2.map(value => (
        <ul>
        <p> {value.reviewer} </p>
        </ul>
      ))}
      </div>
    </div>
  );
}
