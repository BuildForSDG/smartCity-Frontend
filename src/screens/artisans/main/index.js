import React from 'react';
import styled from 'styled-components';
import FeaturedArtisans from './featured_artisans';
import Banner  from '../../../components/Banner';

const Section = styled.section`
  width: 100%;
  padding: 10px;
  margin: 0;
  background: rgba(255, 255, 255, 0.4);
`;
/*const H = styled.h4`
  background: #2962ff;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 30px;
  font-weight: bold;
  color: white;
  border-radius: 30px;
`;*/

const Main = () => (
  <Section className="col-sm-9">
    <Banner />
    <FeaturedArtisans />
  </Section>
);
export default Main;
