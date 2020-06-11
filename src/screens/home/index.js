import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Product } from './Product';
import { getAllProducts } from '../../store/actions';
import SideBar from '../../components/sidebar';

const Home = ({ getAllProducts, products }) => {
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
    <PageDisplay>
    <SideBar />
    <ContainerDiv>
    <LightHeading className="py-2">
      <h2>Fresh Foods</h2>
    </LightHeading>
      <ItemsWrapper>
        {items.map((item) => (
          <Product key={item.product_id} product={item} />
        ))}
      </ItemsWrapper>
    </ContainerDiv>
    </PageDisplay>
  );
};


Home.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProp)(Home);

const PageDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContainerDiv = styled.div`
  padding: 0 5%;
  margin-top: 5%;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5% auto;
  width: 100%;
`;

const LightHeading = styled.div`
    background-color: #FFAF30;
    color: rgba(4, 9, 110, 0.95);
    border-radius: 5px 5px 0px 0px; 
    text-align: center;
 `;