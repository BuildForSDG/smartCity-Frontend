import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Artisan } from './Artisan';
import { getAllProducts } from '../../store/actions';
import SideBar from '../../components/sidebar';
import styled from 'styled-components';

const Artisans = ({ getAllProducts, products }) => {
  useEffect(() => {
    getAllProducts({
      page: 1,
      limit: 9,
      description_length: 120
    });
  }, []);
  console.log(2, products);

  const items = products.all.data;

  return (
    <PageDisplay>
    <SideBar />
    <ContainerDiv>
    <DarkHeadings>
    <h1>Artisans / Professionals</h1>
    </DarkHeadings>
      <ItemsWrapper>
          {items.map((item) => (
              <Artisan key={item._id} product={item} />
          ))}
      </ItemsWrapper>
    </ContainerDiv>
    </PageDisplay>
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

const DarkHeadings = styled.div`
color: #FFAF30;
background-color: rgba(4, 9, 110, 0.95);
text-align: center;
margin-top: 7%;
border-radius: 10px 5px 0px 0px; 
`;
