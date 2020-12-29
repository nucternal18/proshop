import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './component/Header';
import Footer from './component/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <main className='py-3'>
          <Container>
            <Route
              exact
              path='/admin/user/:id/edit'
              component={UserEditScreen}
            />
            <Route exact path='/admin/userlist' component={UserListScreen} />
            <Route exact path='/order/:id' component={OrderScreen} />
            <Route exact path='/placeorder' component={PlaceOrderScreen} />
            <Route exact path='/payment' component={PaymentMethodScreen} />
            <Route exact path='/shipping' component={ShippingScreen} />
            <Route exact path='/login' component={LoginScreen} />
            <Route exact path='/register' component={RegisterScreen} />
            <Route exact path='/profile' component={ProfileScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route exact path='/' component={HomeScreen} />
          </Container>
        </main>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
