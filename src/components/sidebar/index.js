import React from "react";
import styled from "styled-components";
import {SearchBar} from './Search'
import {IconCard} from './IconCard'
import {Subscribe} from './Subscribe'
import CategoriesList from './categories'

const Div = styled.div`
  margin: 0;
  background: rgba(255, 255, 255, 0.5);
  @media (max-width: 767px) {
    display: none;
  }
`;

const SideBar = () => (
  <Div className="col-md-3 col-sm-12">
    <SearchBar />
    <IconCard />
    <CategoriesList />
    <Subscribe />
  </Div>
);
export default SideBar;
