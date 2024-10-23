import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

const ProductDetail = () => {
  const [detail, setDetail] = useState(null);
  // useParams allows us to retrieve parameters from the URL
  const { productId } = useParams();
  
  const navigate = useNavigate();
  //Receiving data sent via a link tag
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${productId}`)
      .then((res) => setDetail(res.data))
      .catch((err) =>
        navigate(`/undefined/${err?.response?.status}`)
      ); // Redirect to 404 page
  }, [productId, navigate]);

  if (detail === null) return 'Loading..';

  return (
    <div
      style={{ height: '84vh' }}
      className="row justify-content-center align-items-center"
    >
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          className="rounded shadow"
          src={detail.image}
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <h1>{detail.title}</h1>
        <p>author: {detail.author}</p>
        <p>{detail.description}</p>
        <p>Number of pages: {detail.page}</p>
        <p>Year: {detail.year}</p>
          {location.state?.uzunluk? (<p>State: {location.state.uzunluk}</p>):(<p>satate yok</p>)
         } 
      </div>
    </div>
  );
};

export default ProductDetail;