import React from 'react';
import styled from 'styled-components';
import ArtisanSideBar from './ArtisanSideBar';
import FreshMartSideBar from './FreshMartSideBar';

const SideBar = () => (
    <SideBarWrapper>
        <FreshMartSideBar />
        <ArtisanSideBar />
    </SideBarWrapper>
);

export default SideBar;


const SideBarWrapper = styled.div`
  color: rgba(4, 9, 110, 0.95);
  width: 100%;
  padding: 0 5px;
  max-heght: 5rem;
`;