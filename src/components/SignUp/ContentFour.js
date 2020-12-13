
import TextField from '@material-ui/core/TextField';
import React, { Component, Fragment } from "react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import DynamicInputs from './DynamicInputs';

export default function CommissionInfo(props)  {
  
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const blankDynamic = { priceId: '', deliveryId: '', revisionsId: '', waitlistId: '' };

  const [DynamicState, setDynamicState] = React.useState([{ commissionId: '', priceId: '', deliveryId: '', revisionsId: '', waitlistId: '' }]);

  const addDynamic = () => { setDynamicState([...DynamicState, {...blankDynamic}]); };

  const handleDynamicChange = (e) => {
    const updatedDynamics = [...DynamicState];
    updatedDynamics[e.target.dataset.idx][e.target.className] = e.target.value;
    setDynamicState(updatedDynamics);
  };

  return(
    <div className="signup-container">
      <div>
          <h2>Commission Information</h2>
          <div className="expand-form">
              <Button color="primary" onClick={toggle} >What's this?</Button>
              <Collapse isOpen={isOpen}>
                <Card className="card-fix">
                  <CardBody>
                  Anim pariatur cliche reprehenderit,
                  enim eiusmod high life accusamus terry richardson ad squid. Nihil
                  anim keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt sapiente ea proident.
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          <div className="form-group">
          <form>
            <input type="button" value="Add New Commission" onClick={addDynamic}/>    
            {
                DynamicState.map((val, idx) => (
                    <DynamicInputs
                        key={`dynamic-${idx}`}
                        idx={idx}
                        DynamicState={DynamicState}
                        handleDynamicChange={handleDynamicChange}
                    />
                ))
            }
          </form>
          </div>
      </div>
    </div>
  )
}

// import React, { useState, Fragment } from "react";
// import ReactDOM from "react-dom";

// import "bootstrap/dist/css/bootstrap.css";

// const App = () => {
//   const [inputFields, setInputFields] = useState([
//     { firstName: '', lastName: '' }
//   ]);

//   const handleAddFields = () => {
//     const values = [...inputFields];
//     values.push({ firstName: '', lastName: '' });
//     setInputFields(values);
//   };

//   const handleRemoveFields = index => {
//     const values = [...inputFields];
//     values.splice(index, 1);
//     setInputFields(values);
//   };

//   const handleInputChange = (index, event) => {
//     const values = [...inputFields];
//     if (event.target.name === "firstName") {
//       values[index].firstName = event.target.value;
//     } else {
//       values[index].lastName = event.target.value;
//     }

//     setInputFields(values);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log("inputFields", inputFields);
//   };

//   return (
//     <>
//       <h1>Dynamic Form Fields in React</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           {inputFields.map((inputField, index) => (
//             <Fragment key={`${inputField}~${index}`}>
//               <div className="form-group col-sm-6">
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="firstName"
//                   name="firstName"
//                   value={inputField.firstName}
//                   onChange={event => handleInputChange(index, event)}
//                 />
//               </div>
//               <div className="form-group col-sm-4">
//                 <label htmlFor="lastName">Last Name</label>
//                 <input
//                   type="text" 
//                   className="form-control" 
//                   id="lastName"
//                   name="lastName"
//                   value={inputField.lastName}
//                   onChange={event => handleInputChange(index, event)}
//                 />
//               </div>
//               <div className="form-group col-sm-2">
//                 <button
//                   className="btn btn-link"
//                   type="button"
//                   onClick={() => handleRemoveFields(index)}
//                 >
//                   -
//                 </button>
//                 <button
//                   className="btn btn-link"
//                   type="button"
//                   onClick={() => handleAddFields()}
//                 >
//                   +
//                 </button>
//               </div>
//             </Fragment>
//           ))}
//         </div>
//         <div className="submit-button">
//           <button
//             className="btn btn-primary mr-2"
//             type="submit"
//             onSubmit={handleSubmit}
//           >
//             Save
//           </button>
//         </div>
//         <br/>
//         <pre>
//           {JSON.stringify(inputFields, null, 2)}
//         </pre>
//       </form>
//     </>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
