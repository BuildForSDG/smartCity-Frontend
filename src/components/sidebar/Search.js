import React from 'react'
import { Form} from "react-bootstrap";
import styled from "styled-components";

const Search = styled(Form)`
  margin: 20px 0;
`;
export const SearchBar = () =>(
    <Search>
      <Form.Group controlId="formBasicEmail">
        <Form.Label srOnly>Search</Form.Label>
        <Form.Control type="text" placeholder="search..." />
      </Form.Group>
    </Search>
)