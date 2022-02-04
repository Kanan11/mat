import React from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from '@stripe/react-stripe-js';

import './CardSectionStyles.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: 16,
      color: '#424770',
      letterSpacing: '0.025em',
      fontFamily: 'Source Code Pro, monospace',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#9e2146'
    }
  }
};

function CardSection({ isSubmitting, stripe, error, handleChange }) {
  const total = useSelector((state) => state.cart.total);

  return (
  <div className="container padding">
    <div className="cardSection"> 
      <label>
        Kortnummer
        <CardNumberElement
          options={CARD_ELEMENT_OPTIONS}
          onChange={handleChange}
        />
      </label>
      <label>
        Datum av kort
        <CardExpiryElement
          options={CARD_ELEMENT_OPTIONS}
          onChange={handleChange}
        />
      </label>
      <label>
        CVC
        <CardCvcElement
          options={CARD_ELEMENT_OPTIONS}
          onChange={handleChange}
        />
      </label>
      <button type="submit" disabled={!stripe || isSubmitting}>
        {isSubmitting ? 'Submitting...' : `Betala ${total + 39} SEK`}
      </button>
      {error && <span className="error">{error}</span>}
    </div>
   </div> 
  );
}

CardSection.propTypes = {
  stripe: PropTypes.any,
  isSubmitting: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CardSection;
