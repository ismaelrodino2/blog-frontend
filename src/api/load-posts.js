import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';

export const defaultLoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 1,
};

export const loadPosts = async (variables = {}) => {
  const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultLoadPostsVariables,
    ...variables,
  });

  return data;
};
