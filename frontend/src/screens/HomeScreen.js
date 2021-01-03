import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../component/Product';
import Message from '../component/Message';
import Loader from '../component/Loader';
import Paginate from '../component/Paginate';
import ProductCarousel from '../component/ProductCarousel';
import Meta from '../component/Meta';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products, page, pages } = productsList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <>
          <ProductCarousel />
        </>
      ) : (
        <Link className='btn btn-light my-3 border' to='/'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
