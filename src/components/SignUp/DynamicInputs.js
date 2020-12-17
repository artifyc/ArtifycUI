import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const DynamicInputs = ({ idx, DynamicState, props }) => {
    const commissionId = `commission-${idx}`;
    const minPriceId = `minprice-${idx}`;
    const maxPriceId = `maxprice-${idx}`;
    const deliveryId = `delivery-${idx}`;
    const revisionsId = `revisions-${idx}`;
    const waitlistId = `waitlist-${idx}`;
    const handleDynamicChange = props.handleDynamicChange;
    
    return (
        <div key={`Dynamic-${idx}`}>
            <TextField label="Commission Type"
                id={commissionId}
                placeholder="Full-body" 
                onChange={handleDynamicChange}
                value={DynamicState[idx].commissionId}
               />
            <TextField label="Min Price"
                id={minPriceId}
                placeholder="$" 
                onChange={handleDynamicChange}
                value={DynamicState[idx].minPriceId}
               />
            <TextField label="Max Price"
                id={maxPriceId}
                placeholder="$$$" 
                onChange={handleDynamicChange}
                value={DynamicState[idx].maxPriceId}
               />
            <TextField label="Expected Delivery (in days)"
                id={deliveryId}
                placeholder="$$$" 
                onChange={handleDynamicChange}
                value={DynamicState[idx].deliveryId}
               />
            <TextField label="Revisions Offered"
                id={revisionsId}
                placeholder="$$$" 
                onChange={handleDynamicChange}
                value={DynamicState[idx].revisionsId}
               />
            <TextField label="Max Accepted Until Waitlist"
                id={waitlistId}
                placeholder="$$$" 
                onChange={handleDynamicChange}
                value={DynamicState[idx].waitlistId}
               />
            <label htmlFor={waitlistId}>Max Waitlist Size</label>
        </div>
    );
};

DynamicInputs.propTypes = {
    idx: PropTypes.number,
    DynamicState: PropTypes.array,
    handleDynamicChange: PropTypes.func,
};

export default DynamicInputs;