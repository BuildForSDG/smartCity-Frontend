import React from "react";
import styled from "styled-components";
import {SearchBar} from './Search'
import {IconCard} from './IconCard'
import {Subscribe} from './Subscribe'
import CategoriesList from './categories'

const Div = styled.div`
  margin: 0;
  background: rgba(255, 255, 255, 0.5);
`;

const SideBar = () => (
  <Div className="col-sm-3">
    <SearchBar />
    <IconCard />
    <CategoriesList />
    <Subscribe />
  </Div>
);
export default SideBar;
