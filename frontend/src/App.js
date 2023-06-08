import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import UserAccount from "./pages/UserAccount";
import Cart from "./pages/Cart";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import BusinessRegister from "./pages/BusinessRegister";
import ProtectedRoute from "./component/ProtectedRoute";
import Staff from "./pages/Staff";
import FormStaff from "./pages/FormStaff";
import Store from "./pages/Store";
import FormStore from "./pages/FormStore";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
        <Route index element={<Store />} />
          <Route path="staff" element={<Staff />} />
          <Route path="form-staff" element={<FormStaff />} />
          <Route path="store" element={<Store />} />
          <Route path="form-store" element={<FormStore />} />
        </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/acc" element={<UserAccount />} />
        <Route path="/bacc" element={<BusinessRegister />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
