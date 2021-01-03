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
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container fluid>
          <Switch>
            <Route
              exact
              path='/admin/product/:id/edit'
              component={ProductEditScreen}
            />
            <Route
              exact
              path='/admin/productlist'
              component={ProductListScreen}
            />
            <Route
              exact
              path='/admin/productlist/:pageNumber'
              component={ProductListScreen}
            />

            <Route
              exact
              path='/admin/user/:id/edit'
              component={UserEditScreen}
            />
            <Route exact path='/admin/userlist' component={UserListScreen} />
            <Route exact path='/order/:id' component={OrderScreen} />
            <Route exact path='/admin/orderlist' component={OrderListScreen} />
            <Route exact path='/placeorder' component={PlaceOrderScreen} />
            <Route exact path='/payment' component={PaymentMethodScreen} />
            <Route exact path='/shipping' component={ShippingScreen} />
            <Route exact path='/login' component={LoginScreen} />
            <Route exact path='/register' component={RegisterScreen} />
            <Route exact path='/profile' component={ProfileScreen} />
            <Route exact path='/product/:id' component={ProductScreen} />
            <Route exact path='/cart/:id?' component={CartScreen} />
            <Route path='/search/:keyword' component={HomeScreen} exact />
            <Route exact path='/page/:pageNumber' component={HomeScreen} />
            <Route
              exact
              path='/search/:keyword/page/:pageNumber'
              component={HomeScreen}
            />
            <Route exact path='/' component={HomeScreen} />
        </Switch>
          </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
