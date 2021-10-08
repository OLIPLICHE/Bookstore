/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const AddNewBook = ({ addBookToStoreProps }) => {
  const [formInputs, setFormInputs] = useState({
    id: uuid(),
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  const addBook = (e) => {
    e.preventDefault();
    if (formInputs.title && formInputs.author) {
      const newBook = {
        id: uuid(),
        title: formInputs.title,
        author: formInputs.author,
      };
      addBookToStoreProps(newBook);
    }
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Book title"
        onChange={onChange}
        value={formInputs.title}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        onChange={onChange}
        value={formInputs.author}
        required
      />
      <button type="button" onClick={addBook}>Add New Book</button>
    </form>
  );
};

AddNewBook.propTypes = {
  addBookToStoreProps: PropTypes.func.isRequired,
};

export default AddNewBook;
