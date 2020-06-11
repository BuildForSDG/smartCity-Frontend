import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import config from '../../../config/system';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios.get(config.serverBaseUrl + '/categories/list');
      setCategories(result.data);
      console.log(result.data);
    };
    fetchCategories();
  }, []);
  return (
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((e) => {
            return (
              <tr key={e._id}>
                <td>{e.name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
  );
};
export default CategoriesList;
