import React from 'react';
import ReactDOM from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';
import {ThemeProvider, createTheme} from '@material-ui/core';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const theme = createTheme({
  palette: {
      primary: {
          main: '#3f83ba'
      },
      secondary: {
          main: '#00ff00'
      }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Elements stripe={stripePromise}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Elements>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
