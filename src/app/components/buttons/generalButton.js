
// components/CustomButton.js
"use client";
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

const CustomButton = ({ text, route, color }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <button
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CustomButton;
