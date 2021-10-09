import API from '../../api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addBook = (payload) => (dispatch) => {
  API.postBook(payload).then(async (response) => {
    if (response.data === 'Created') {
      dispatch({
        type: ADD_BOOK,
        payload,
      });
    }
  });
};

export const removeBook = (payload) => (dispatch) => {
  API.deleteBook(payload).then(async (response) => {
    if (response.data === 'The book was deleted successfully!') {
      dispatch({
        type: REMOVE_BOOK,
        payload,
      });
    }
  });
};

export const getBooks = () => (dispatch) => {
  API.getBooks()
    .then((response) => response.data)
    .then((data) => {
      const books = Object.entries(data).map(([key, value]) => {
        const [booksArray] = value;
        return {
          item_id: key,
          ...booksArray,
        };
      });

      dispatch({
        type: GET_BOOKS,
        payload: books,
      });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    case GET_BOOKS:
      return [...state, ...action.payload] || [...state, []];

    default:
      return state;
  }
};

export default reducer;
