import Router from 'preact-router';

// import Navbar from "./components/shared/Navbar"
// import Preview from "./components/shared/Preview"
// import Sidebar from "./components/shared/Sidebar"
import Layout from "./components/layout/Layout"
import Home from './components/views/Home';
import NotFound from './components/helpers/404';
export function App() {
  return (
    <Router>
      <Home path="/" />
      <Layout path="/user/:rest*" />
      <NotFound path="*" default />
    </Router>
  )
}
