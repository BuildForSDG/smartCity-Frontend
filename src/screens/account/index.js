import React from 'react';
import { Card, Row, Col, Button, CardColumns, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from '../../images/store-banner.jpg';

const Acct = styled(Row)`
  width: fit-content;
  background: #eee;
  padding: 20px;
`;

const ProfileItem = styled(Col)`
  padding: 5px 20px;
`;
const ItemCard = styled(Card)`
  border: none;
  position: relative;
  transition: all 0.3s ease-in;
  .overlay {
    opacity: 0;
    color: white;
    border-radius: 4px;
    transition: all 0.3s ease-in;
  }
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;
const Div = styled.div`
  margin: auto;
  width: fit-content;
  border: 4px solid #e0e0e0;
  border-radius: 50%;
`;
const Edit = styled.div`
  width: fit-content;
  margin: 20px auto;
`;
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  small {
    position: absolute;
    top: 40%;
    left: 40%;
    background: rgba(0, 0, 0, 0.2);
    padding: 4px;
  }
`;
const AccountSection = styled(Col)`
  border: 1px solid white;
  border-top: none;
  border-bottom: none;
`;

const Account = () => (
  <Acct>
    <ProfileItem md={3}>
      <ItemCard>
        <Card.Body>
          <Div>
            <Image src={Img} alt="profile picture" width={120} height={120} roundedCircle />
          </Div>

          <Card.Title className="text-center mt-3">Nkwuda Sunday</Card.Title>
          <Card.Text className="text-center">scletus40@gmail.com</Card.Text>
          <Card.Text className="text-center">Lagos</Card.Text>
          <Edit>
            <Button variant="default" size="sm">
              <small>Edit Profile</small>
              <span className="ml-2">
                <FontAwesomeIcon icon="edit" />
              </span>
            </Button>
          </Edit>
          <br />
          <Card.Text className="text-center">Deposit fund</Card.Text>
          <Card.Text className="text-center">Widthdraw fund</Card.Text>
          <Card.Text className="text-center">Transaction history</Card.Text>
          <Card.Text className="text-center">Get support</Card.Text>
          <Card.Text className="text-center">Logout</Card.Text>
        </Card.Body>
      </ItemCard>
    </ProfileItem>

    <AccountSection md={9}>
      <CardColumns className="row">
        <ProfileItem sm={6}>
          <ItemCard>
            <Card.Body>
              <Card.Title className="text-center text-primary">Wallet</Card.Title>
              <Card.Text className="text-center">
                Your wallet is emty. Make a deposit or start selling to earn money
              </Card.Text>
              <Overlay className="overlay">
                <small>Deposit now</small>
              </Overlay>
            </Card.Body>
          </ItemCard>
        </ProfileItem>
        <ProfileItem sm={6}>
          <ItemCard>
            <Card.Body>
              <Card.Title className="text-center text-primary">Orders</Card.Title>
              <Card.Text className="text-center">
                Your Orders will appera here once you start making purchases or hiring artisans
              </Card.Text>
              <Overlay className="overlay">
                <small>view details</small>
              </Overlay>
            </Card.Body>
          </ItemCard>
        </ProfileItem>
        <ProfileItem sm={6}>
          <ItemCard>
            <Card.Body>
              <Card.Title className="text-center text-primary">WishList</Card.Title>
              <Card.Text className="text-center">You have not added any items to your wishlist</Card.Text>
              <Overlay className="overlay">
                <small>view details</small>
              </Overlay>
            </Card.Body>
          </ItemCard>
        </ProfileItem>
        <ProfileItem sm={6}>
          <ItemCard>
            <Card.Body>
              <Card.Title className="text-center text-primary">Reviews</Card.Title>
              <Card.Text className="text-center">You are yet to review any roduct or seller.</Card.Text>
              <Overlay className="overlay">
                <small>view details</small>
              </Overlay>
            </Card.Body>
          </ItemCard>
        </ProfileItem>

        <ProfileItem sm={6}>
          <ItemCard>
            <Card.Body>
              <Card.Title className="text-center text-primary">Membership Management</Card.Title>
              <Card.Text className="text-center">Request to become a vendor or service provider</Card.Text>
              <Overlay className="overlay">
                <small>view details</small>
              </Overlay>
            </Card.Body>
          </ItemCard>
        </ProfileItem>
        <ProfileItem sm={6}>
          <ItemCard>
            <Card.Body>
              <Card.Title className="text-center text-primary">Reward Points</Card.Title>
              <Card.Text className="text-center">Start inviting friends to earn reward points</Card.Text>
              <Overlay className="overlay">
                <small>view details</small>
              </Overlay>
            </Card.Body>
          </ItemCard>
        </ProfileItem>
      </CardColumns>
    </AccountSection>
  </Acct>
);
export default Account;
