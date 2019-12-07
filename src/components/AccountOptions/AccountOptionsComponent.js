import React from 'react';
import Grid from '@material-ui/core/Grid';
import AccountOptionsCard from './AccountOptionsCard';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        margin: "20px",
    }
}

function AccountOptionsComponent(props) {
    const { classes } = props;

    const descriptionArray = [
        {
            title: "View Orders",
            description: "Check status, review, or track"
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
            description: "Update prices, add new works, or view statistics"
        }
    ]
    return (
        <Grid container>
            <Grid
                container item
                lg={3}
            ></Grid>
            <Grid className={classes.root}
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
                lg={6}
                >
                {descriptionArray.map(value => (
                    <AccountOptionsCard {...value}/>
                ))}
            </Grid>
            <Grid
                container item
                lg={3}
            ></Grid>
        </Grid>
    )
}

export default withStyles(styles)(AccountOptionsComponent);