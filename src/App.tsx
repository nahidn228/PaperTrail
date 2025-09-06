import { Outlet } from "react-router";
import CommonLayout from "./Layouts/CommonLayout";
// import Navbar from "./Layouts/Navbar";
// import Footer from "./Layouts/Footer";

function App() {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}

export default App;

// <div>
//   <Navbar />

//   <div className="min-h-screen max-w-screen-2xl mx-auto">
//     <Outlet />
//   </div>

//   <Footer />
// </div>