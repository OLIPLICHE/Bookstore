import React from 'react';
import BookItem from '../components/BookItem';
import AddNewBook from '../components/AddNewBook';

const books = [
  {
    id: 1,
    title: 'Men are From Mars, Women are From Venus',
    author: 'John Gray',
  },
  {
    id: 2,
    title: 'Games People Play',
    author: 'Eric Berne',
  },
];

const Books = () => (
  <main>
    <section>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </section>
    <section>
      <AddNewBook />
    </section>
  </main>
);

export default Books;
