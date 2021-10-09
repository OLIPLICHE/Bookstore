import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const BookItem = ({ book, removeBookFromStoreProps }) => (
  <li key={book.item_id}>
    <p>
      {book.title}
      <span>
      &nbsp;in&nbsp;
        {book.category}
        &nbsp;category
      </span>
    </p>
    <button
      type="button"
      onClick={() => {
        removeBookFromStoreProps(book.item_id);
      }}
    >
      Remove
    </button>
  </li>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,

  removeBookFromStoreProps: PropTypes.func.isRequired,
};

export default BookItem;
