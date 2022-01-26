import FetchWrapper from './fetchWrapper';

class BooksAPI {
  static #BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

  static #APP_ID = 'SMcuJc9UpHozVSS1bBzI';

  static getAllBooks = () => FetchWrapper.get(`${this.BASE_URL}/apps/${this.APP_ID}/books`);

  static postBook = (data) => FetchWrapper.post(`${this.BASE_URL}/apps/${this.APP_ID}/books`, data);

  static deleteBook = (id) => FetchWrapper.delete(`${this.BASE_URL}/apps/${this.APP_ID}/books/${id}`)
}

export default BooksAPI;
