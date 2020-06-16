import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { CardColumns } from 'react-bootstrap';
import { Loading } from '../../../../components/alerts/loading'
import { ErrorAlert } from '../../../../components/alerts/errorAlert'
import { Artisan } from './Artisan';
import { getAllArtisans } from '../../../../store/actions';

const Deck = styled(CardColumns)`
  margin: 20px auto;
  margin-left: 20px;
  padding: 0px !important;
  width: 100%;
  @media (max-width: 910px) {
    margin: auto !important;
  }
`;
const LightHeading = styled.h2`
  background-color: #ffaf30;
  color: rgba(4, 9, 110, 0.95);
  margin-top:50px;
  text-align: center;
`;

const FeaturedArtisans = ({ getAllArtisans, artisans }) => {
  useEffect(() => {
    getAllArtisans({
      type: 'artisans',
      limit: 15
    });
  }, []);

  let { data, error, isLoading } = artisans.all;

  const state = error ? <ErrorAlert /> : isLoading ? <Loading /> : null;
  return (
    state || (
    <div>
      <LightHeading className="py-2">Featured Artisans</LightHeading>
      <Deck>
        {data.map((item) => (
          <Artisan key={item._id} artisan={item} />
        ))}
      </Deck>
    </div>
    )
  );
};

FeaturedArtisans.propTypes = {
  getAllArtisans: PropTypes.func,
  artisans: PropTypes.object
};
const mapStateToProps = ({ artisans }) => {
  return {
    artisans
  };
};
const mapDispatchToProp = {
  getAllArtisans
};
export default connect(mapStateToProps, mapDispatchToProp)(FeaturedArtisans);
