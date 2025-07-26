import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Route>
        <Routes path="/" element={<Dashboard />} />
        <Routes path="/add" element={<Add />} />
        <Routes path="/list" element={<List />} />
        <Routes path="/orders" element={<Orders />} />
        <Routes path="/login" element={<Login />} />
      </Route>
      <Footer />
    </div>
  );
};

export default App;
