import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Artisan } from './Artisan';
// import { getAllArtisans } from '../../store/actions';
import { getAllProducts } from '../../store/actions';
import "./index.css";


export const Artisans =  ({ getAllProducts, products }) => {
    useEffect(() => {
        getAllProducts({
            page: 1,
            limit: 6,
            description_length: 150
        });
    }, []);
    console.log(2, products);
    
    const items = products.all.data.rows;
    
    return (
        <div className="Artisan__container">
         {items.map((item) => (
             <Artisan key={item.product_id} product={item} />
         ))}
        </div>
    );
}

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
