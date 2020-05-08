import React from 'react';
import Grid from '@material-ui/core/Grid';
import AccountOptionsCard from './AccountOptionsCard';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        margin: "10px",
    },
    header: {
        maxWidth: "50%",
        margin: "0 auto",
        top: 0
    }
}

function AccountOptionsComponent(props) {
    const { classes } = props;

    const descriptionArray = [
        {
            title: "View Orders",
            description: "Check status, review, or track",
        },
        {
            title: "View Messages",
            description: "Chat with and commission artists",
        },
        {
            title: "Account Settings",
            description: "Update login info and profile",
        },
        {
            title: "Portfolio Settings",
            description: "Update prices, add new works, & more"
        }
    ]
    return (
        <div>
            <div className={classes.header}>
                <Typography variant="h2" gutterBottom >
                    My Account
                </Typography>
            </div>
        <Grid container>
            <Grid
                container item
                md={3}
                sm={0}
            ></Grid>
            <Grid className={classes.root}
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
                md={6}
                sm={12}
                >
                {descriptionArray.map(value => (
                    <AccountOptionsCard {...value}/>
                ))}
            </Grid>
            <Grid
                container item
                md={3}
                sm={0}
            ></Grid>
        </Grid>
        </div>
    )
}

export default withStyles(styles)(AccountOptionsComponent);