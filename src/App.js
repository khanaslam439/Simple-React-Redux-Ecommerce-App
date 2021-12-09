import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Login from "./Pages/Login";
import NotFound from "./NotFound";
import Welcome from "./Pages/Welcome";
import EditProduct from "./Pages/EditProduct";
import AddProduct from "./Pages/AddProduct";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Welcome /> } />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-product"
          element={<AddProduct />}
        />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, null)(App);
