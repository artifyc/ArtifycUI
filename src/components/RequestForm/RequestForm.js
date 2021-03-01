import React, {useEffect, useState} from 'react';
import RequestFormComponent from './RequestFormComponent'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const styles = {
    root: {
        margin: "10px",
    },
    header: {
        maxWidth: "50%",
        margin: "0 auto",
    }
}
const classes = styles;

export default function RequestForm(props) {

//     const [commissionListState, setCommissionListState] = useState([]);
// //     useEffect(() => {
// //         const messages = [];
// //         const getCommissionsList = () => {
// //             if (props.match.params.id === undefined) {
// //                 return
// //             }
// //             console.log('Getting Commisions List for User');
// //             console.log(props.match.params.id);
// //             fetch('https://8vmazpdvrb.execute-api.us-east-1.amazonaws.com/qa/boards', {
// //                 method: 'GET',
// //                 headers: {
// //                 'Content-type': 'application/json',
// //                 'Authorization': props.currUser.signInUserSession.idToken.jwtToken
// //                 },
// //             }).then(res => res.json())
// //                 .then((res) => {
// //                     setCommissionListState({
// //                         commissionsList: res.commisionsList.columns
// //                     });
// //                 })
// //         }

// //         getCommissionsList();
// //   }, [props.match.params.id])
//     setCommissionListState({
//         commissionLists: "hi"
//     })

    // function submitCommissionRequest(commisionRequestDetails) {

    //     // fetch('https://8vmazpdvrb.execute-api.us-east-1.amazonaws.com/qa/boards', {
    //     //     method: 'Put',
    //     //     headers: {
    //     //       'Content-type': 'application/json',
    //     //       'Authorization': props.currUser.signInUserSession.idToken.jwtToken
    //     //     },
    //     //     body: JSON.stringify({
    //     //       newCommissionRequest: commisionRequestDetails
    //     //     }),
    //     //   }
    //     // )
    //     //   .then(res => res.json())
    //     //   .then(res => {
    //     //     console.log(res);
    //     //     return res;
    //     //   })
    //     //   .catch(err => {
    //     //     console.log(err);
    //     //   })
    //     console.log("Request send attempted")
    // }

    
    // function renderCommissionsList() {
    //     //TODO: Add if not logged in logic here
    //     if (commissionListState.description == null) {
    //     return ([<div className="loading-container">
    //         <img className="loading-gif" src={require("../../assets/loading_brush_new.gif")} alt={"loading..."}/>
    //     </div>]);
    //     }
    //     return (
        
    //         <div> Rendering Commissions List
    //         </div>)
    // }

    console.log(props.match.params.id);
    console.log("I am here")
    
    
    return (
      <div> Request Form Page
          <RequestFormComponent></RequestFormComponent>
          <div>
                <div className="content-container">
                <div>
                <Grid container>
            <Grid
                container item
                md={3}
            >
                <TextField label="Description"  id="description"
                    name="description" placeholder="fill in description" 
                    multiline
                    rows={10}
                    fullWidth
                    defaultValue="Fill in Description Here"
                    variant="outlined"
                />
            </Grid>
            </Grid>
                    
            </div>
            </div>
            </div>
      </div>
      
    )
}
