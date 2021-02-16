import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../../style/App.css';
import RequestTypeCard from './RequestTypeCard';

const styles = {
    root: {
        margin: "10px",
    },
    header: {
        maxWidth: "50%",
        margin: "0 auto",
    }
}

export default function AccountOptionsComponent(props) {
    const classes = styles;

    const descriptionArray = [
        {
            title: "Commission Type 1",
            description: "Check status, review, or track",
        },
        {
            title: "Commission Type 2",
            description: "Chat with and commission artists",
        },
        {
            title: "Commission Type 3",
            description: "Update login info and profile",
        },
        {
            title: "Commission Type 4",
            description: "Update prices, add new works, & more"
        }
    ]
    return (
        <div className="content-container">
            <div className={classes.header} >
                <Typography variant="h2" gutterBottom align="center" >
                    Commission Types
                </Typography>
            </div>
            
        <Grid container>
            <Grid
                container item
                md={3}
            ></Grid>
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
                md={6}
                sm={12}
                item={true}
                >
                {descriptionArray.map(value => (
                    <RequestTypeCard key={value.title} {...value}/>
                ))}
            </Grid>
            <Grid
                container item
                md={3}
            ></Grid>
        </Grid>
        </div>
    )
}