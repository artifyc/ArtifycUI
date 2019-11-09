import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserLandingCard from './UserLandingCard';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        
    }
}

function UserLandingComponent(props) {
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
        <Grid className={classes.root}
            container
            direction="row"
            justify="left"
            alignItems="center"
            spacing={2}
            >
            {descriptionArray.map(value => (
            <Grid key={value.title} item>
                <UserLandingCard />
            </Grid>
            ))}
        </Grid>
    )
}

export default withStyles(styles)(UserLandingComponent);