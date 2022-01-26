const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';

export const addBook = payload => ({
  type: BOOK_ADDED,
  payload,
});

export const removeBook = payload => ({
  type: BOOK_REMOVED,
  payload,
});