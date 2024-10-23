import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
 
  useEffect(() => {
    axios
      .get('http://localhost:3000/books')
      .then((res) => setBooks(res.data))
      .catch((err) => {}); //Redirect to the error page
  }, []);

  console.log(books);

  //   If there is no response from the API, display 'Loading...' on the screen
  if (books === null) return 'Loading...';

  return (
    <div>
      <h3 className="px-5 mt-3">
        {books.length} book
      </h3>

      <div className="cards-container">
        {/* Display a card on the screen for each element in the books array */}
        {books.map((book) => (
          // Sending data to the page we are redirecting to using a link tag
          <Link
            to={`/ürün-detay/${book.id}`} state={{ uzunluk: books.length}} 
          >
            <Card key={book.id} data={book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;