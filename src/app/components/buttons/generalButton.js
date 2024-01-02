// components/CustomButton.js
"use client";
import PropTypes from 'prop-types';

const CustomButton = ({ text, onClick, color }) => (
  <button
    style={{ backgroundColor: color }}
    onClick={onClick}
  >
    {text}
  </button>
);

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,  // Change from 'route' to 'onClick'
  color: PropTypes.string.isRequired,
};

export default CustomButton;
