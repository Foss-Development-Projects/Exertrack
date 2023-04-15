import { useState ,useRef, useEffect } from "preact/hooks"
import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"
import Preview from "../shared/Preview"
import Sidebar from "../shared/Sidebar"

const Layout = () => {
      const [ sidebarVisible, setSidebarVisible ] = useState(null);
      useEffect(() => {
            setSidebarVisible(sidebarVisible)
      }, [sidebarVisible])
      let sidebarRef: any = useRef();
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