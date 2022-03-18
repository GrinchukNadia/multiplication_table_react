import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = ({ firstNum, secondNum, handleRotate }) => {
  return (
    <div
      onClick={handleRotate}
      className='card'
    >
      <div className='card__side card__front'>
        <span>{`${firstNum}x${secondNum}`}</span>
      </div>
      <div className='card__side card__back'>
        <span>{firstNum * secondNum}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  firstNum: PropTypes.number.isRequired,
  secondNum: PropTypes.number.isRequired,
  handleRotate: PropTypes.func,
}

export default Card;
