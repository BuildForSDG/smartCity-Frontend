import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { theme } from './theme';
import { Burger } from './Burger';
import { Menu } from './Menu';
import { useOnClickOutside } from './hooks';

function AppBurger() {
    const [ open, setOpen ] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <BurgerWrapper theme={theme}>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div> 
        </BurgerWrapper>
    )
}

export default AppBurger;

const BurgerWrapper = styled.div`
display: none;
  background: navyblue;
  @media(max-width: 768px) {
      display: block;
  }
`;