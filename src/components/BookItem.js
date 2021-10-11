import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const BookItem = ({ book, removeBookFromStoreProps }) => (
  <li className="book-item" key={book.item_id}>
    <div className="book-item__left">
      <p className="book-item__p--category">{book.category}</p>
      <p className="book-item__p--title">{book.title}</p>
      <p className="book-item__p--author">Book Author</p>
      <div className="book-item__btn-group">
        <button className="book-item__btn" type="button">
          Comments
        </button>
        <div className="v-divider" />
        <button
          className="book-item__btn"
          type="button"
          onClick={() => {
            removeBookFromStoreProps(book.item_id);
          }}
        >
          Remove
        </button>
        <div className="v-divider" />
        <button className="book-item__btn" type="button">
          Edit
        </button>
      </div>
    </div>
    <div className="book-item__right">
      <div className="book-item__progress">
        <div className="book-item__progress-circle" />
        <div className="book-item__progress-text">
          <p className="book-item__progress-text--percent">64%</p>
          <p className="book-item__progress-text--status">Completed</p>
        </div>
      </div>
      <div className="v-divider" />
      <div className="book-item__chapter">
        <p className="book-item__chapter-title">CURRENT CHAPTER</p>
        <p className="book-item__chapter-number">
          Chapter 1: &ldquo;Introduction&rdquo;
        </p>
        <button className="book-item__chapter-btn" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
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
