import React from 'react';
import PropTypes from 'prop-types';
import './navigation.scss'

const Navigation = ({ number, handleNav, currentNum }) => {
  const classes = number === currentNum ? 'nav_item active' : 'nav_item'
  return (
    <div
      onClick={handleNav}
      data-nav={number}
      className={classes}
    >
      {number}
    </div>
  );
};

Navigation.propTypes = {
  number: PropTypes.number.isRequired,
  handleNav: PropTypes.func,
  currentNum: PropTypes.number,
}

export default Navigation;
