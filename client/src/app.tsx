import Router from 'preact-router';

import Layout from "./components/layout/Layout"
import Home from './components/pages/Home';
import Signin from './components/pages/Signin';
import Register from './components/pages/Register';
import ForgotPassword from './components/helpers/ForgotPassword';
import NotFound from './components/helpers/404';

export default function App() {
  return (
      <Router>
        <Home path="/" />
        <Signin path="/signin" />
        <Register path="/register" />
        <ForgotPassword path="/forgot-password" />
        <Layout path="/user/:rest*" />
        <NotFound path="*" default />
      </Router>
  )
}
