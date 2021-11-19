import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Footer from './Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Header from './Shared/Header/Header';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Detail from './pages/Detail/Detail';
import Register from './pages/Login/Register/Register';
import MyOrder from './pages/Order/MyOrder/MyOrder';
import ManageOrder from './pages/Order/ManageOrder/ManageOrder';
import AddService from './pages/Home/AddService/AddService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/details/:serviceId">
              <Detail></Detail>
            </PrivateRoute>

            <PrivateRoute path="/myorders">
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute path="/manageAllOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>

            <PrivateRoute path="/addNewService">
              <AddService></AddService>
            </PrivateRoute>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
