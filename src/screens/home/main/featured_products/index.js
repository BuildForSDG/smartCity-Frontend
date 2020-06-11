import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { CardColumns } from 'react-bootstrap';
import { Product } from './Product';
import { getAllProducts } from '../../../../store/actions';

const Deck = styled(CardColumns)`
  margin: 20px auto;
  margin-left: 20px;
  padding: 0px !important;
  width: 100%;
  @media (max-width: 910px) {
    margin: auto !important;
  }
`;
const LightHeading = styled.h2`
  background-color: #ffaf30;
  color: rgba(4, 9, 110, 0.95);
  margin-top:50px;
  text-align: center;
`;

const FeaturedProducts = ({ getAllProducts, products }) => {
  useEffect(() => {
    getAllProducts({
      page: 1,
      limit: 12,
      description_length: 120
    });
  }, []);
  console.log(2, products);

  const items = products.all.data;
  return (
    <div>
      <LightHeading className="py-2">Featured Products</LightHeading>
      <Deck>
        {items.map((item) => (
          <Product key={item._id} product={item} />
        ))}
      </Deck>
    </div>
  );
};

FeaturedProducts.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProp)(FeaturedProducts);
