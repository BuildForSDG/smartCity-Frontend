import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Artisan } from './Artisan';
import { getAllProducts } from '../../store/actions';
import './index.css'
const Artisans = ({ getAllProducts, products }) => {
  useEffect(() => {
    getAllProducts({
      page: 1,
      limit: 9,
      description_length: 120
    });
  }, []);
  console.log(2, products);

  const items = products.all.data.rows;

  return (
    <div className="container Artisan__container">
         {items.map((item) => (
             <Artisan key={item.product_id} product={item} />
         ))}
        </div>
  );
};


Artisans.propTypes = {
  getAllProducts: PropTypes.func,
  products: PropTypes.object
};
const mapStateToProps = ({ products }) => {
  return {
    products
  };
};
const mapDispatchToProp = {
  getAllProducts
};
export default connect(mapStateToProps, mapDispatchToProp)(Artisans);
