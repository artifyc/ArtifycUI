import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core';
import axios from 'axios'; 
import {DropzoneArea} from 'material-ui-dropzone';

const DynamicInputs = ({ idx, DynamicState, props }) => {
    const commissionId = `commission-${idx}`;
    const minPriceId = `minPrice-${idx}`;
    const maxPriceId = `minPrice-${idx}`;
    const deliveryId = `delivery-${idx}`;
    const revisionsId = `revisions-${idx}`;
    const waitlistId = `waitlist-${idx}`;
    const handleDynamicChange = props.handleDynamicChange;
    const handleDynamicFileChange = props.handleDynamicFileChange;
    const handleRemoveDynamicFields = props.handleRemoveDynamicFields;

    return (
        <div key={`Dynamic-${idx}`}>
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
            <TextField
                label="Number of Revisions"
                inputProps={{
                    'data-idx': idx,
                    type: "text",
                    name: revisionsId,
                    id: "revisionsId",
                    value: DynamicState[idx].revisionsId,
                    onChange: handleDynamicChange
                 }}
            />
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
            <DropzoneArea
                 acceptedFiles={['image/*']}
                 type={'file'}
                 dropzoneText={"Drag and drop a sample image here"}
                 inputProps={{
                     onChange: ((event) => handleDynamicFileChange(event, idx))
                 }}
            />
            <button
                className="btn btn-link"
                type="button"
                onClick={() => handleRemoveDynamicFields(idx)}
            >Remove Commission</button>
        </div>
    );
};

DynamicInputs.propTypes = {
    idx: PropTypes.number,
    DynamicState: PropTypes.array,
    handleDynamicChange: PropTypes.func,
};

export default DynamicInputs;