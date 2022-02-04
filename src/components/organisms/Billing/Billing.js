import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import {
  useStripe,
  useElements,
  CardNumberElement
} from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { validate } from '../../../helpers/validation';
import Axios from '../../../axios';
import CardSection from '../../molecules/CardSection/CardSection';
import style from './Billing.module.scss';
import { clearCart } from '../../../store/actions/cartActions';
import {
  checkoutRules,
  checkoutInitialValues
} from '../../../constants/validation';
import Input from '../../atoms/Input/Input';

const Billing = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cart = useSelector((state) => state.cart);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const getBillingDetails = (values) => {
    return {
      address: {
        city: 'Göteborg',
        country: 'SE',
        state: 'Västra Götaland',
        line1: values.address,
        line2: null,
        postal_code: values.zip
      },
      email: values.email,
      name: values.name,
      phone: values.phone
    };
  };

  const handleCardElementsChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError('');
    }
  };

  const afterPaymentSuccess = (paymentIntent) => {
    dispatch(clearCart());
    const { amount, id } = paymentIntent;
    history.push(`/success?amount=${amount}&id=${id}`, {
      from: 'checkout'
    });
  };

  const onSubmit = async (values, { setSubmitting }) => {
    setError('');
    const isStripeLoading = !stripe || !elements;

    if (isStripeLoading) {
      setSubmitting(false);
      return;
    }

    try {
     
      const {
        data: { client_secret: clientSecret }
      } = await Axios.post('https://hemlagat.herokuapp.com/payment/secret', {
        products: cart.products.map((product) => ({
          id: product.id,
          quantity: product.quantity
        })),
        email: values.email
      });

    
      const cardPayment = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: getBillingDetails(values)
        }
      });

      if (cardPayment.error) {
        setError(cardPayment.error.message);
      } else if (cardPayment.paymentIntent.status === 'succeeded') {
        afterPaymentSuccess(cardPayment.paymentIntent);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    
    <Formik 
      initialValues={checkoutInitialValues}
      validate={(values) => validate(checkoutRules, values)}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="container">
          <div className={style.wrapBillingAndCardSection}>
            <div>
              <Input
                label="Namn och Efternamn"
                name="name"
                placeholder="Elon Musk"
                errors={errors}
                touched={touched}
              />
              <Input
                label="Din telefon nummer"
                name="phone"
                type="tel"
                pattern="[0-9]*"
                placeholder="0707070707"
                errors={errors}
                touched={touched}
              />
              <Input
                label="E post adress"
                name="email"
                type="email"
                placeholder="elon.musk@mail.com"
                errors={errors}
                touched={touched}
              />
              <Input
                label="Gatu namn"
                name="address"
                type="text"
                placeholder="Gata och nummer"
                errors={errors}
                touched={touched}
              />
              <Input
                label="Postkod"
                name="zip"
                type="text"
                placeholder="43130 OBSERVERA BARA MÖLNDAL POSTKOD REGION"
                errors={errors}
                touched={touched}
              />
            </div>
            <div>
              <CardSection
                stripe={stripe}
                isSubmitting={isSubmitting}
                error={error}
                handleChange={handleCardElementsChange}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Billing;
