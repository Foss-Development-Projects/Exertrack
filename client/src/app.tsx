import Router from 'preact-router';

import Layout from "./components/layout/Layout"
import Home from './components/pages/Home';
import Signin from './components/pages/Signin';
import Register from './components/pages/Register';
import ForgotPassword from './components/helpers/ForgotPassword';
import NotFound from './components/helpers/404';
import PasswordReset from './components/helpers/PasswordReset';
import Profile from './components/pages/Profile';
import EmailSuccess from './components/helpers/EmailSuccess';

export default function App() {
  return (
      <Router>
        <Home path="/" />
        <Signin path="/signin" />
        <Register path="/register" />
        <Profile path="/user/search/profile" />
        <PasswordReset path="/reset-password" />
        <ForgotPassword path="/forgot-password" />
        <EmailSuccess path="/forgot-password/email-success" />
        <Layout path="/user/:rest*" />
        <NotFound path="*" default />
      </Router>
  )
}
