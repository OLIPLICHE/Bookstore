import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const BookItem = ({ book }) => (
  <li key={book.id}>
    <p>
      {book.author}
      <span>
        {' ' }
        {' '}
        by
        {' '}
        { book.title}
      </span>
    </p>
    <button type="button">Remove</button>
  </li>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
