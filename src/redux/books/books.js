import BooksAPI from '../../utils/booksAPI';

const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';
const BOOKS_DISPLAYED = 'bookStore/books/BOOKS_DISPLAYED';

export const addBook = (payload) => ({
  type: BOOK_ADDED,
  payload,
});

export const removeBook = (payload) => ({
  type: BOOK_REMOVED,
  payload,
});

export const bookDisplay = (payload) => ({
  type: BOOKS_DISPLAYED,
  payload,
});

const initialState = [];

const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOK_ADDED:
      return [...state, payload];
    case BOOK_REMOVED:
      return (state.filter(({ id }) => id !== payload.id));
      case BOOKS_DISPLAYED:
        return [...state, ...payload];
    default:
      return state;
  }
};

export const addBookAPI = (item) => (dispatch) => {
  const {
    id, title, author, category,
  } = item;
  const book = {
    item_id: id,
    title: `${title} , ${author}`,
    category,
  };
  BooksAPI.postBook(book);
  dispatch(addBook(item));
};

export const displayBooks = () => async (dispatch) => {
  const data = await BooksAPI.getAllBooks();
  const books = Object.entries(data).map(([id, book]) => {
    const { category, title: fullTitle } = book[0];
    const [title, author] = fullTitle.split(',');
    return {
      id,
      title,
      author,
      category,
    };
  });
  dispatch(bookDisplay(books));
};

export default booksReducer;
