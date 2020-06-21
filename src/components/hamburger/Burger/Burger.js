import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';


const Burger = ({ open, setOpen }) => {
    return (
        <BurgerDiv>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
               {/*
                 <div />
                <div />
                <div />
             */}
             Menu
            </StyledBurger>
            <div className="ml-5 mb-0 p-3 pb-0">All Categories</div>
        </BurgerDiv>
    );
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
};

export default Burger;

const BurgerDiv = styled.div`
    position: relative;
    border-radius: none;
`;

const StyledBurger = styled.button`
  position: absolute;
  top: 8px;
  width: 3rem;
  height: 2rem;
  background: rgba(4, 9, 110, 0.95);
  color: #fff;
  border: none;
  padding: 0;
  z-index: 10;

  &:focus {
      outline:none;
  }

  div {
      width: 2rem;
      height: 0.25rem;
      backgroung: ${({ theme, open }) =>  open ? theme.primaryColor : 'yellow'};
      border-radius: 10px;
      transition: all 0.3s linear;
      transform-origin: 1px;
      color: red;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    :nth-chid(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
}
`;