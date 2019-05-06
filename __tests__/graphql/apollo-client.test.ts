import client from '../../pages/lib/init-apollo';
import { gql } from 'apollo-boost';

describe('Graphql', () => {
  test('apollo-client availablity check', async done => {
    const result: any = await client().query({
      query: gql`
        query {
          allUsers {
            id
            firstName
            lastName
          }
        }
      `
    });

    expect(result).toBeDefined();
    expect(result.data).toBeDefined();
    expect(result.data.allUsers).toBeDefined();
    expect(result.data.allUsers.length).toBeGreaterThan(0);
    done();
  }, 4000);
});
