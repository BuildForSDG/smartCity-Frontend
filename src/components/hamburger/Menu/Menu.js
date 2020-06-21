import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import CategoriesList from '../../sidebar/categories';

const Menu = ({ open }) => {
    return (
        <CategoriesMenu open={open}>
            <div style={{marginTop: '0rem'}} >
            <CategoriesList />
            </div>
        </CategoriesMenu>
    )
};

Menu.propTypes = {
    open: bool.isRequired
};

export default Menu;

const CategoriesMenu = styled.nav`
    transform: ${({ open}) => open ? 'translate(0)' : 'translate(-100%)'};
    height: ${({ open}) => open ? '400px' : '0'};
    width: ${({ open}) => open ? '95%' : '0'};
    overflow-y: scroll;
    margin-left: 5%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: block;
        // width: ${({ open}) => open ? '500%' : '0'};
    }
`;