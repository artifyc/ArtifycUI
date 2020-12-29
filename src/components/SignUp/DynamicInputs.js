import React, { Children } from 'react';
import PropTypes from 'prop-types';
import {TextField, Grid, Button} from '@material-ui/core';
import axios from 'axios'; 
import {DropzoneArea} from 'material-ui-dropzone';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const DynamicInputs = ({ idx, DynamicState, props }) => {
    const commissionId = `commission-${idx}`;
    const minPriceId = `minPrice-${idx}`;
    const maxPriceId = `minPrice-${idx}`;
    const deliveryId = `delivery-${idx}`;
    const revisionsId = `revisions-${idx}`;
    const waitlistId = `waitlist-${idx}`;
    const colors = ['#EF476F', '#FFD166', '#06D6A0', '#118ab2', '#3f51b5']
    const handleDynamicChange = props.handleDynamicChange;
    const handleDynamicFileChange = props.handleDynamicFileChange;
    const handleRemoveDynamicFields = props.handleRemoveDynamicFields;

    const useStyles = makeStyles(theme => createStyles({
        previewChip: {
          minWidth: 160,
          maxWidth: 210
        },
        root: {
            flexGrow: 1,
            padding: 24
        },
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
        buttonCustom: {
            marginTop: 10
        }
    }));

    const ColoredLine = ({ idx }) => (
        <hr
            style={{
                color: colors[idx%5],
                backgroundColor: colors[idx%5],
                height: 3,
                marginTop: 30
            }}
        />
    );
    
    const classes = useStyles();

    return (
        <div key={`Dynamic-${idx}`}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        label="Commission Type"
                        inputProps={{
                            'data-idx': idx,
                            type: "text",
                            name: commissionId,
                            id: "commissionId",
                            value: DynamicState[idx].commissionId,
                            onChange: handleDynamicChange
                        }}
                />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Estimated Delivery"
                        inputProps={{
                            'data-idx': idx,
                            type: "text",
                            name: deliveryId,
                            id: "deliveryId",
                            value: DynamicState[idx].deliveryId,
                            onChange: handleDynamicChange
                        }}
                />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Minimum Price"
                        inputProps={{
                            'data-idx': idx,
                            type: "text",
                            name: minPriceId,
                            id: "minPriceId",
                            value: DynamicState[idx].minPriceId,
                            onChange: handleDynamicChange
                        }}
                />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Maximum Price"
                        inputProps={{
                            'data-idx': idx,
                            type: "text",
                            name: maxPriceId,
                            id: "maxPriceId",
                            value: DynamicState[idx].maxPriceId,
                            onChange: handleDynamicChange
                        }}
                />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="# of Revisions"
                        inputProps={{
                            'data-idx': idx,
                            type: "text",
                            name: revisionsId,
                            id: "revisionsId",
                            value: DynamicState[idx].revisionsId,
                            onChange: handleDynamicChange
                        }}
                />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Maxiumum Waitlist"
                        inputProps={{
                            'data-idx': idx,
                            type: "text",
                            name: waitlistId,
                            id: "waitlistId",
                            value: DynamicState[idx].waitlistId,
                            onChange: handleDynamicChange
                        }}
                />
                </Grid>
                </Grid>
            </div>
            <DropzoneArea
                showPreviews={true}
                acceptedFiles={['image/*']}
                showPreviewsInDropzone={false}
                useChipsForPreview
                previewGridProps={{
                    container: { spacing: 1, direction: 'row' }}}
                previewChipProps={{
                    classes: { root: classes.previewChip },
                }}
                fileObjects={DynamicState[idx]['fileId']}
                previewText="Selected files"
                filesLimit={1}
                dropzoneProps={{ maxSize: 8e+6 }}
                onDelete= {(event) => handleDynamicFileChange(event, idx, false)}
                inputProps={{ onChange: ((event) => handleDynamicFileChange(event, idx))}}
            />
            <Button
                color="primary" 
                variant="contained"
                className={classes.buttonCustom}
                onClick={() => handleRemoveDynamicFields(idx)}
            >Remove Commission</Button>
            <ColoredLine idx={idx} />
        </div>
    );
};

DynamicInputs.propTypes = {
    idx: PropTypes.number,
    DynamicState: PropTypes.array,
    handleDynamicChange: PropTypes.func,
};

export default DynamicInputs;