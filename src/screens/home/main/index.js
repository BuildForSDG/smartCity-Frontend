import React from 'react';
import styled from 'styled-components';
import Config from '../../../components/products/CategoryConfig';
import ArtisanCategories from '../../../components/artisans/CategoryConfig';
import Banner from '../../../components/Banner';
import { Promo } from '../../../components/Promo';

const Section = styled.section`
  width: 100%;
  padding: 10px;
  margin: 0;
  background: rgba(255, 255, 255, 0.4);
`;
const Fruits = Config(1, 'fruits', 3);
const Vegetables = Config(2, 'vegetables', 3);
const Snacks = Config(3, 'snacks', 3);
const FrozenFoods = Config(4, 'frozen', 3);
const Lunch = Config(5, 'lunch', 3);
const Cakes = Config(6, 'cakes', 3);
const Stylist = ArtisanCategories(7, 'stylist', 3);
const Electrical = ArtisanCategories(8, 'electrical', 3);
const Events = ArtisanCategories(9, 'events', 3);
const Fashion = ArtisanCategories(10, 'fashion', 3);
const Laundry = ArtisanCategories(11, 'laundry', 3);
const Cleaning = ArtisanCategories(12, 'cleaning', 3);
const Barbing = ArtisanCategories(13, 'barbing', 3);
const Photography = ArtisanCategories(14, 'photography', 3);
const Design = ArtisanCategories(15, 'design', 3);
const Tech = ArtisanCategories(16, 'tech', 3);

const Main = () => (
  <div className="col-xs-12 col-md-9">
  <Section>
    <Banner />
    <Promo />
    <Fruits />
    <Vegetables />
    <Snacks />
    <FrozenFoods />
    <Lunch />
    <Cakes />
    <Stylist />
    <Electrical />
    <Events />
    <Fashion />
    <Laundry />
    <Cleaning />
    <Barbing />
    <Photography />
    <Design />
    <Tech />
  </Section>
  </div>
);
export default Main;
