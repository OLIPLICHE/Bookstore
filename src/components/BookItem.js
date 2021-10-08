import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const BookItem = ({ book, removeBookFromStoreProps }) => (
  <li key={book.id}>
    <p>
      {book.title}
      <span>
        {' ' }
        {' '}
        by
        {' '}
        { book.title}
      </span>
    </p>
    <button
      type="button"
      onClick={() => {
        removeBookFromStoreProps(book.id);
      }}
    >
      Remove
    </button>
  </li>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,

  removeBookFromStoreProps: PropTypes.func.isRequired,
};

export default BookItem;
