import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';

export const loadPosts = async () => {
  const defaultVariables = {
    start: 0,
    limit: 10,
  };
  const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultVariables,
  });
  return data;
};
