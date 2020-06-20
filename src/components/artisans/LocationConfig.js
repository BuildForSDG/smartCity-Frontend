import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { CardColumns, Button } from 'react-bootstrap';
import Artisan from './Artisan';
import { Loading } from '../alerts/loading';
import { ErrorAlert } from '../alerts/errorAlert';
import { getLocationArtisans } from '../../store/actions';
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
  height: 3px;
  margin-top: 50px;
  text-align: center;
`;
const Location = styled.div`
  box-shadow: 2px 2px 24px 24px #f5f5f5;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
`;
const Btn = styled(Button)`
float: right;
`
const H = styled.h3`
float: left;
text-transform: capitalize;
`

function LocationConfig(location, name) {
  const Comp = ({ getLocationArtisans, artisans }) => {
    useEffect(() => {
      getLocationArtisans({
        type: 'artisans',
        location,
        limit: 3,
        name
      });
    }, []);
    const handleClick = () => {
      getLocationArtisans({
        type: 'artisans',
        location,
        name
      });
    }
    // location === 'Lekki'? 'Lekki I': location === 'Gbagada'? 'Gbagada Phase 1' : location

    let { data, error, isLoading } = artisans[name];

    const state = error ? <ErrorAlert /> : isLoading ? <Loading /> : null;
    return (
      state || (
        <Location>
            <H>{location}</H>
            <Btn variant=" outlined primary" size='sm' onClick={handleClick} >view all</Btn>
          <LightHeading></LightHeading>
          <Deck>
            {data.map((item) => (
              <Artisan key={item._id} artisan={item} />
            ))}
          </Deck>
        </Location>
      )
    );
  };

  Comp.propTypes = {
    getLocationArtisans: PropTypes.func,
    artisans: PropTypes.object
  };
  const mapStateToProps = ({ artisans }) => {
    return {
      artisans
    };
  };
  const mapDispatchToProp = {
    getLocationArtisans
  };
  const exp = connect(mapStateToProps, mapDispatchToProp)(Comp);
  return exp;
}
export default LocationConfig;
