import { useRef } from 'preact/hooks';
import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"
import Preview from "../shared/Preview"
import Sidebar from "../shared/Sidebar"

const Layout = () => {
      const sidebarRef = useRef(null);
      return(
            <div className="container">
                  <Navbar sidebar={sidebarRef} />
                  <Sidebar sidebar={sidebarRef} />
                  <Preview />
                  <Footer />
            </div>
      )
}
export default Layout;