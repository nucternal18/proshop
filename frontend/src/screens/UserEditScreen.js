import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../component/Message';
import Loader from '../component/Loader';
import { getUserDetails } from '../actions/userActions';
import FormContainer from '../component/FormContainer';

const UserEditScreen = ({ history, location, match }) => {
    const userId = match.params.id;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();



  const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
      
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch Register
  };
  return (
      <>
          <Link to='/admin/userlist' className='btn btn-light border my-3'>Go Back</Link>
      <FormContainer>
        <h1>Edit User</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='isadmin'>
            <Form.Control
              type='checkbox'
              label='Is Admin'
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
