import React from 'react';
import ReactWOW from 'react-wow';

const MiddleColumn = () => (
    <ReactWOW animation="slideInDown">
        <h4>Quick Links</h4>
        <div>
        <p>
        <a style={{color: '#f7b731'}} href="/">Home</a>
        </p>
        <p>
        <a style={{color: '#f7b731'}} href="/freshMart">FreshMart</a>
        </p>
        <p>
        <a style={{color: '#f7b731'}} href="/artisans">Artisans</a>
        </p>
        <p>
        <a style={{color: '#f7b731'}} href="/contact">help</a>
        </p>
        </div>
    </ReactWOW>
);

export default MiddleColumn;
