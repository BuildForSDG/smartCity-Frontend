import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';


const Burger = ({ open, setOpen }) => {
    return (
        <div style={{ position: 'relative'}}>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
        </div>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
};

export default Burger;

const StyledBurger = styled.button`
  position: absolute;
  top: 25px;
  width: 2rem;
  height: 2rem;
  background: blue;
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