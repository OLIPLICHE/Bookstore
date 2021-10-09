import axios from 'axios';

const END_POINT = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/j7LPM1fwDsVO8gxJB89O/books';

const API = {
  postBook: async (book) => {
    const response = await axios.post(END_POINT, {
      item_id: book.item_id,
      title: book.title,
      category: book.category,
    });
    return response;
  },
  getBooks: async () => {
    const response = await axios.get(END_POINT);
    return response;
  },
  deleteBook: async (id) => {
    const response = await axios.delete(`${END_POINT}/${id}`);
    return response;
  },
};

export default API;
