import React from 'react';
import Proptypes from 'prop-types';
import {  Image } from 'react-bootstrap';
import config from '../../config/system';

export const HiredArtisan = ({ hireArtisan }) => {
    const { person } = hireArtisan;
    return (
        <tr>
          <td>
          <Image src={`${config.imageBaseUrl}/${person.filename}`} thumbnail />
          </td>
          <td>{person.name}</td>
        </tr>
    );
}

HiredArtisan.propTypes = {
    hireArtisan: Proptypes.object
}