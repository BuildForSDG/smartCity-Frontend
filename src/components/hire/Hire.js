import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Modal, Table } from 'react-bootstrap';
import { hideHire, saveHire } from '../../store/actions';
import { HireArtisan } from './HiredArtisan';
import HireForm from './HireForm'

const Hire = ({ hideHire, saveHire, alerts }) => {
    let { data, open } = alerts.hire;
    const handleClose = () => hideHire();
    const hirePerson = (() => {
        data.forEach(element => {
            return JSON.stringify(element);
        });
    })();
    return (
        <Modal size="lg" show={open} aria-labelledby="hire-modal" centered>
          <Modal.Header>
            <Modal.Title id="hire-modal">Hire Now</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table>
                <thead>
                <tr>
                  <th>Image</th>
                </tr>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {hirePerson.length ? (
                    hirePerson.map((e) => <HireArtisan key={e.item._id} />)
                ) : (
                    <tr>
                      <td>You have selected any artisn</td>
                    </tr>
                )}
                </tbody>
            </Table>
            <HireForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-primary' onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
    )
};

Hire.propTypes = {
    hideHire: PropTypes.func,
    alerts: PropTypes.object,
    saveHire: PropTypes.func
};

const mapStateToProps = ({ alerts }) => {
    return {
        alerts
    }
}
const mapDispatchToProp = {
    hideHire,
    saveHire
}

export default connect(mapStateToProps, mapDispatchToProp)(Hire);
