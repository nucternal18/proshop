import { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Col, Table, Row, Modal, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../component/Message';
import Loader from '../component/Loader';
import { listOrders } from '../actions/orderActions';


const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push('/login');
    }
  }, [history, userInfo, dispatch]);

  const createProductHandler = () => {
    // dispatch(createProduct());
  };
  return (
    <>
      <Row className='align-items-center px-4 '>
        <Col>
          <h1>Orders</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus'></i> Create Order
          </Button>
        </Col>
      </Row>
      <Col className='w-100' md={12}>
        {/* {loadingDelete && <Loader />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>} */}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>CUSTOMER NAME</th>
                <th>DATE</th>
                <th>ORDER ITEMS</th>
                <th>TOTAL PRICE</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.user && item.user.name}</td>
                  <td>{item.createdAt.substring(0, 10)}</td>
                  <td>
                    <Button variant='primary' onClick={handleShow}>
                      View
                    </Button>

                    <Modal
                      size='lg'
                      aria-labelledby='contained-modal-title-vcenter'
                      centered
                      show={show}
                      onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>ORDERED ITEMS</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Table
                          striped
                          bordered
                          hover
                          responsive
                          className='table-sm'>
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Image</th>
                              <th>NAME</th>
                              <th>PRICE</th>
                              <th>QTY</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.orderItems.map((item) => (
                              <tr key={item._id}>
                                <td>{item.product}</td>
                                <td>
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    width='50'
                                    thumbnail
                                    fluid
                                    rounded
                                  />
                                </td>
                                <td>{item.name}</td>
                                <td>£{item.price}</td>
                                <td>{item.qty}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                  <td>{item.totalPrice}</td>
                  <td>
                    {item.isPaid ? (
                      item.paidAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>

                  <td>
                    {item.isDelivered ? (
                      item.deliveredAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${item._id}`}>
                      <Button className='btn-sm border' variant='light'>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </>
  );
};

export default OrderListScreen;
