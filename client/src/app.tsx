import Router from 'preact-router';

import Layout from "./components/layout/Layout"
import Home from './components/pages/Home';
import NotFound from './components/helpers/404';

export default function App() {
  return (
      <Router>
        <Home path="/" />
        <Layout path="/user/:rest*" />
        <NotFound path="*" default />
      </Router>
  )
}
