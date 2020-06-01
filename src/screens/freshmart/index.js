import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Freshy } from './Freshy';
import { getAllProducts } from '../../store/actions';
import { ContainerDiv, ItemsWrapper} from '../styles'

export const FreshMart =  ({ getAllProducts, products }) => {
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
        <ContainerDiv>
          <ItemsWrapper>
            {items.map((item) => (
                <Freshy key={item.product_id} product={item} />
            ))}
          </ItemsWrapper>
        </ContainerDiv>
    )

};

// const styles = {
//     padding: '10vw',
//     margin: 'auto',
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap'
// };

FreshMart.propTypes = {
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
}

export default connect(mapStateToProps, mapDispatchToProp)(FreshMart);
