import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import UserAccount from "./pages/UserAccount";
import Cart from "./pages/Cart";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import BusinessRegister from "./pages/BusinessRegister";
import ProtectedRoute from "./component/ProtectedRoute";

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
        />
        <Route path="/cart" element={  <Cart />} />
        <Route path="/acc" element={<UserAccount />} />
        <Route path="/bacc" element={<BusinessRegister />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
