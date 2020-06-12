import React from 'react';
import styled from 'styled-components';
import Config from './products/CategoryConfig'
import Banner  from '../../../components/Banner';
import { Promo} from '../../../components/Promo'

const Section = styled.section`
  width: 100%;
  padding: 10px;
  margin: 0;
  background: rgba(255, 255, 255, 0.4);
`;
const Fruits = Config(1, 'fruits')
const Vegetables = Config(2, 'vegetables')
const Snacks = Config(3, 'snacks')
const FrozenFoods = Config(4, 'frozen-foods')
const Lunch = Config(5, 'lunch')
const Cakes = Config(6, 'cakes')

const Main = () => (
  <Section className="col-sm-9">
    <Banner />
    <Promo />
    <Fruits />
    <Vegetables />
    <Snacks />
    <FrozenFoods />
    <Lunch />
    <Cakes />
  </Section>
);
export default Main;
