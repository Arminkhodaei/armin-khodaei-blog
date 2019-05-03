import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import client from './lib/init-apollo';
import Layout from '../layouts/mainLayout';

const App = () => {
  useEffect(() => {
    client({})
      .query({
        query: gql`
          query {
            allUsers {
              id
              firstName
              lastName
            }
          }
        `
      })
      .then(result => console.log(result));
  }, []);

  return (
    <Layout>
      <p>Main page content</p>
    </Layout>
  );
};

export default App;
