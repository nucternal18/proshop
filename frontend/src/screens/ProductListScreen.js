import { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Col, Table, Row, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../component/Message';
import Loader from '../component/Loader';
import Paginate from '../component/Paginate';
import {
  listProducts,
  deleteProduct,
  createProduct,
} from '../actions/productActions';
import { PRODUCT_CREATE_RESET } from '../constants/productConstants';

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products, pages, page } = productsList;
  const productDelete = useSelector((state) => state.productDelete);
  const { loading: loadingDelete, error: errorDelete, success } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    product,
    success: successCreate,
  } = productCreate;

  useEffect(() => {
    if (success) {
      dispatch({
        type: PRODUCT_CREATE_RESET,
      });
    }
    if (!userInfo.isAdmin) {
      history.push('/login');
    }
    if (successCreate) {
      history.push(`/admin/product/${product._id}/edit`);
    } else {
      dispatch(listProducts('', pageNumber));
    }
  }, [history, userInfo, dispatch, successCreate, product, success, pageNumber]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      // DELETE Products
      dispatch(deleteProduct(id));
    }
  };
  const createProductHandler = () => {
    dispatch(createProduct());
  };
  return (
    <>
      <Row className='align-items-center px-4'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus'></i> Create Product
          </Button>
        </Col>
      </Row>
      <Col md={12}>
        {loadingDelete && <Loader />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
          ) : (
              <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>Count In Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>
                      <Image src={item.image} alt={item.name} width='50' thumbnail fluid rounded />
                  </td>
                  <td>{item.name}</td>
                  <td>£{item.price}</td>
                  <td>{item.category}</td>
                  <td>{item.brand}</td>
                  <td>{item.countInStock}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${item._id}/edit`}>
                      <Button className='btn-sm border' variant='light'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(item._id)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
                </Table>
                <Paginate pages={pages} page={page} isAdmin={true}/>
                </>
        )}
      </Col>
    </>
  );
};

export default ProductListScreen;
