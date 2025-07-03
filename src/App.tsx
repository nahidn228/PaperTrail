import { Outlet } from "react-router";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen max-w-screen-2xl mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
