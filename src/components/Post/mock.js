import { data } from '../../api/dados.json';

const {
    title,
    excerpt,
    cover,
    content,
    author,
    categories,
    createdAt,
  } = data.posts[0];
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title,
    excerpt,
    cover,
    content,
    author,
    categories,
    createdAt,
}