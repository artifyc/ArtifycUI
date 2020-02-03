import React from 'react';
import '../index.css';

const fonts = ['Becoming a founding artist', 'Becoming a customer', 'Joining the mailing list'];

class Dropdown extends React.Component {
  render () {
    const {
      show,
      value,
      handleToggle,
      handleBlur,
      handleChange,
    } = this.props;
    
    console.log('show: ', value)
    
    return (
      <div className="dropdown-container">
        <label className="arrow">
          <input
            type="button"
            value={value}
            className="dropdown-btn"
            style={{ fontFamily: value }}
            onClick={handleToggle}
            onBlur={handleBlur}
          />
        </label>
        <ul className="dropdown-list" hidden={!show}>
          {
            fonts.map((font) => (
            <li
              className="option"
              style={{ fontFamily: font }}
              onClick={handleChange(font)}
            >
              {font}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dropdown;