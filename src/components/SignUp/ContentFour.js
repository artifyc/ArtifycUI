
import React from "react";
import { Collapse, CardBody, Card } from 'reactstrap';
import Button from '@material-ui/core/Button';
import DynamicInputs from './DynamicInputs';
import Cookies from 'universal-cookie';

export default function CommissionInfo(props)  {
  //console.log(props)
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  props.setCookies("username", props.state.username, "/")

  return(
    <div className="signup-container">
      <div>
          <h2>Commission Information</h2>
          <div className="expand-form">
              <Button color="primary" variant="contained" onClick={toggle} >What's this?</Button>
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
            <br></br><br></br>
            {
                props.state.DynamicState.map((val, idx) => (

                    <DynamicInputs
                        key={`dynamic-${idx}`}
                        idx={idx}
                        DynamicState={props.state.DynamicState}
                        handleDynamicChange={props.handleDynamicChange}
                        handleRemoveDynamicFields={props.handleRemoveDynamicFields}
                        props={props}
                    />

                ))
            }
            <Button color="primary" variant="contained" onClick={props.addDynamic}>Add New Commission</Button>

          </form>
          <br></br><br></br>
          <h5>Almost done! <br></br><br></br> Click "next" to give your payment info to Stripe, while we finish setting up your account in the meantime!</h5>
          </div>
      </div>
    </div>
  )
}