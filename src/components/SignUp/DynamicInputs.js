import React from 'react';
import PropTypes from 'prop-types';

const DynamicInputs = ({ idx, DynamicState, props }) => {
    const commissionId = `commission-${idx}`;
    const minPriceId = `minPrice-${idx}`;
    const maxPriceId = `minPrice-${idx}`;
    const deliveryId = `delivery-${idx}`;
    const revisionsId = `revisions-${idx}`;
    const waitlistId = `waitlist-${idx}`;
    const handleDynamicChange = props.handleDynamicChange;
    const handleRemoveDynamicFields = props.handleRemoveDynamicFields;

    return (
        <div key={`Dynamic-${idx}`}>
            <label htmlFor={commissionId}>Commission Type</label>
            <input
                type="text"
                name={commissionId}
                data-idx={idx}
                id={commissionId}
                className="commissionId"
                value={DynamicState[idx].commissionId}
                onChange={handleDynamicChange}
            />
            <label htmlFor={minPriceId}>Minimum Price</label>
            <input
                type="text"
                name={minPriceId}
                data-idx={idx}
                id={minPriceId}
                className="minPriceId"
                value={DynamicState[idx].minPriceId}
                onChange={handleDynamicChange}
            />
            <label htmlFor={minPriceId}>Maximum Price</label>
            <input
                type="text"
                name={maxPriceId}
                data-idx={idx}
                id={maxPriceId}
                className="maxPriceId"
                value={DynamicState[idx].maxPriceId}
                onChange={handleDynamicChange}
            />
            <label htmlFor={deliveryId}>Expected Delivery</label>
            <input
                type="text"
                name={deliveryId}
                data-idx={idx}
                id={deliveryId}
                className="deliveryId"
                value={DynamicState[idx].deliveryId}
                onChange={handleDynamicChange}
            />
            <label htmlFor={revisionsId}>Number of Revisions</label>
            <input
                type="text"
                name={revisionsId}
                data-idx={idx}
                id={revisionsId}
                className="revisionsId"
                value={DynamicState[idx].revisionsId}
                onChange={handleDynamicChange}
            />
            <label htmlFor={waitlistId}>Max Waitlist Size</label>
            <input
                type="text"
                name={waitlistId}
                data-idx={idx}
                id={waitlistId}
                className="waitlistId"
                value={DynamicState[idx].waitlistId}
                onChange={handleDynamicChange}
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