import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class LoginModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }



    render() {
        return (
            <div>
            <Button variant="outlined" color="primary" onClick={() => this.setState({open: true})}>
                Login
            </Button>
            <Dialog open={this.state.open} onClose={() => this.setState({open: false})}aria-labelledby="form-dialog-title">
            <form
            onSubmit={e => {
                alert("form submitted!");
                e.preventDefault();
            }}
            >
            <DialogTitle id="form-dialog-title">Log in</DialogTitle>
            <DialogContent>
                <DialogContentText>
                Please enter your email and password.
                </DialogContentText>
                <TextField
                autoFocus
                margin="dense"
                label="Email"
                type="text"
                fullWidth
                />
                <TextField
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                />
                <div style={{ height: 75 }} />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => this.setState({open: false})} color="primary">
                Cancel
                </Button>
                <Button
                type="submit"
                onClick={() => alert("login")}
                color="primary"
                variant="contained"
                >
                Log in
                </Button>
            </DialogActions>
            </form>
        </Dialog>
        </div>
        )
    }

}

export default LoginModal;