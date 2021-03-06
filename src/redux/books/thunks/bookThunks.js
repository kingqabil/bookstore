import BooksAPI from '../../../utils/booksAPI';
import * as Actions from '../actions/booksAction';

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
  dispatch(Actions.addBook(item));
};

export const displayBooks = () => async (dispatch) => {
  try {
    dispatch(Actions.loadingStart(true));
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
    dispatch(Actions.bookDisplay(books));
  } catch (err) {
    throw new Error(err);
  } finally {
    dispatch(Actions.loadingEnd(false));
  }
};

export const removeBookAPI = (id) => (dispatch) => {
  BooksAPI.deleteBook(id);
  dispatch(Actions.removeBook({ id }));
};
