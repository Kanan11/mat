import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Success = () => {
  const query = useQuery();
  const id = query.get('id');
  const amount = query.get('amount');
  const location = useLocation();


  const { from } = location.state || '';

  return (
    <>
      {id && amount && from === 'checkout' ? (

        <div className="container_success padding">

          <h1>Grattis!</h1>
          <h3>Din betalning är bekräftad!</h3>
          <div>
            <strong>Betalning id är:</strong> {id}
          </div>
          <div>
            <strong>Du har betalat:</strong> {amount / 100} SEK
          </div>
        </div>
      ) : (
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      )}
    </>
  );
};

export default Success;
