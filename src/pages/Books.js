import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from '../components/BookItem';
import AddNewBook from '../components/AddNewBook';
import { addBook, removeBook } from '../redux/books/books';

const Books = () => {
  const { books } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const addBookToStore = (newBook) => {
    dispatch(addBook(newBook));
  };

  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <main>
      <section>
        {!!books && (
          <ul>
            {books.map((book) => (
              <BookItem
                key={book.id}
                book={book}
                removeBookFromStoreProps={removeBookFromStore}
              />
            ))}
          </ul>
        )}
      </section>
      <section>
        <AddNewBook addBookToStoreProps={addBookToStore} />
      </section>
    </main>
  );
};

export default Books;
