import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from '../components/BookItem';
import AddNewBook from '../components/AddNewBook';
import { addBook, removeBook, getBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => ({ ...state }));
  const getBooksFromStore = () => {
    dispatch(getBooks());
  };

  useEffect(() => {
    getBooksFromStore();
  }, []);

  const addBookToStore = (newBook) => {
    dispatch(addBook(newBook));
  };

  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <main>
      <section className="books">
        {!!books && (
          <ul className="book-list">
            {books.map((book) => (
              <BookItem
                key={book.item_id}
                book={book}
                removeBookFromStoreProps={removeBookFromStore}
              />
            ))}
          </ul>
        )}
      </section>
      <hr className="divider" />
      <section>
        <AddNewBook addBookToStoreProps={addBookToStore} />
      </section>
    </main>
  );
};

export default Books;
