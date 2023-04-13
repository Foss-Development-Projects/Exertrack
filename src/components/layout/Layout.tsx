import { useRef } from 'preact/hooks';
import Navbar from "../shared/Navbar"
import Preview from "../shared/Preview"
import Sidebar from "../shared/Sidebar"

const Layout = () => {
      return(
            <div className="container">
                  <Navbar />
                  <Sidebar />
                  <Preview />
                </div>
      )
}
export default Layout;