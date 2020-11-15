import React from 'react';
import PropTypes from 'prop-types';

const DynamicInputs = ({ idx, DynamicState, handleDynamicChange }) => {
    const commissionId = `commission-${idx}`;
    const priceId = `price-${idx}`;
    const deliveryId = `delivery-${idx}`;
    const revisionsId = `revisions-${idx}`;
    const waitlistId = `waitlist-${idx}`;
    

    return (
        <div key={`Dynamic-${idx}`}>
            <label htmlFor={priceId}>Commission Type</label>
            <input
                type="text"
                name={commissionId}
                data-idx={idx}
                id={commissionId}
                className="base-price"
                value={DynamicState[idx].pcommission}
                onChange={handleDynamicChange}
            />
            <label htmlFor={priceId}>Base Price</label>
            <input
                type="text"
                name={priceId}
                data-idx={idx}
                id={priceId}
                className="base-price"
                value={DynamicState[idx].price}
                onChange={handleDynamicChange}
            />
            <label htmlFor={deliveryId}>Expected Delivery</label>
            <input
                type="text"
                name={deliveryId}
                data-idx={idx}
                id={deliveryId}
                className="expected-delivery"
                value={DynamicState[idx].delivery}
                onChange={handleDynamicChange}
            />
            <label htmlFor={revisionsId}>Number of Revisions</label>
            <input
                type="text"
                name={revisionsId}
                data-idx={idx}
                id={revisionsId}
                className="revisions"
                value={DynamicState[idx].revisions}
                onChange={handleDynamicChange}
            />
            <label htmlFor={waitlistId}>Max Waitlist Size</label>
            <input
                type="text"
                name={waitlistId}
                data-idx={idx}
                id={waitlistId}
                className="waitlist"
                value={DynamicState[idx].waitlist}
                onChange={handleDynamicChange}
            />
        </div>
    );
};

DynamicInputs.propTypes = {
    idx: PropTypes.number,
    DynamicState: PropTypes.array,
    handleDynamicChange: PropTypes.func,
};

export default DynamicInputs;