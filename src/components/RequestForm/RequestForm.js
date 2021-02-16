import React, {useEffect, useState} from 'react';
import RequestFormComponent from './RequestFormComponent'

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
      <div> hello
          <RequestFormComponent></RequestFormComponent>
      </div>
    )
}
