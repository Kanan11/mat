import React, { useEffect, useState } from 'react';
import Product from '../../molecules/Product/Product';
import styles from './Products.module.scss';
import Axios from '../../../axios';
import { Button } from "@material-ui/core";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Alla");
  const handleClick = (category) => setSelectedCategory(category);

  useEffect(() => {
    const getData = async () => {
      const { data } = await Axios.get('https://hemlagat.herokuapp.com/products');
      setProducts(data.products);
    };
    getData();
  }, []);
  
  const allCategories = [
    'Alla',
    ...new Set(products.map(product => product.category)),
  ];

  return (
    <>
        <div className="padding">
          <div className={styles.products}>
           {
              allCategories.map(category => (
                  <Button onClick={() => handleClick(category)} key={category}  style={{ margin: '0px' }}>
                      {category}
                  </Button>))
              }
              {
              products.filter(product => selectedCategory==="Alla" || product.category===selectedCategory)
                .map(product => (
                  <div className={styles.products} key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />       
                    </div>))
                }
                </div>
        </div>
    </>
  );
};

export default Products;
