import React from 'react';
import Billing from '../../organisms/Billing/Billing';

const Checkout = () => {
  return (
    <div className="container padding">
      <h1>Ange er uppgifter samt leveransadress</h1>
      <Billing />
    </div>
  );
};

export default Checkout;
