import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './Product.module.scss';
import CartButton from '../../atoms/CartButton/CartButton';
import { addToCart } from '../../../store/actions/cartActions';
import { Button} from "@material-ui/core"; 
import { useHistory } from 'react-router-dom'

const Product = ({ product }) => {
  const { id, name, price, image, description } = product;
  const dispatch = useDispatch();
  const history = useHistory()

  return (
    
    <div className={style.product}>
      <h3 className={style.name}>
        {id}. {name}
      </h3>
      <img className={style.img} src={image} alt={name} />
      <p className={style.description}>{description}</p>
      <div className={style.price}>Pris: {price} SEK</div>

      <CartButton
        title="Lägg till varukorg"
        onClick={() => dispatch(addToCart(product))}
      />
      <Button style={{ color: 'white', backgroundColor: 'skyblue', textDecoration: 'none' }} onClick={() => history.push('/cart')} variant="outlined"><span role="img" aria-label="sheep">Till varukorgen</span></Button> 

    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string
  }).isRequired
};

export default Product;
