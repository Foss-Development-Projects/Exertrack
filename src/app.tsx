import Navbar from "./components/shared/Navbar"
import Preview from "./components/shared/Preview"
import Sidebar from "./components/shared/Sidebar"

export function App() {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <Preview />
    </div>
  )
}
