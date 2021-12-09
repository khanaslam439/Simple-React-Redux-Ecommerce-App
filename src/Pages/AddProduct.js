import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";

import Header from "./Header";

const AddProduct = props => {
  const [isUpdate, setUpdate] = useState(false);
  const isLogged = props.user.isLogged;

  
const [name, setName] = useState("");
const [detail, setDetail] = useState("");
const [price, setPrice] = useState(0);
const [quantity, setQuantity] = useState(0);
const [url, setUrl] = useState("");
  
const handleFormSubmit = (ev) => {
  ev.preventDefault()
  let obj = {
    id: props.products.length,
    name,
    detail,
    price,
    quantity,
    imgURL: url
  }

  
  props.addProduct(obj);
  setUpdate(true)
}
  
  const handleImage = (e) => {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);

   reader.onloadend = function (e) {
     setUrl(reader.result)
    };
};

  return isUpdate  || (isLogged === false)
    ?  <Navigate to='/' />
    :   <React.Fragment>
          <Header name="Aslam khan" />
          <div className="container">
            <div className="text-center py-md-3">
              <h3 className="display-4">Add Product</h3>
              <p>Add product detail and hit submit to save it.</p>
            </div>
            <form onSubmit={(e) => handleFormSubmit(e)} className="add--product__form">
              <div>
                <label>Product Title</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label>Description</label>
                <textarea
                  onChange={(e) => setDetail(e.target.value)}
                  rows={4}
                ></textarea>
              </div>
              <div>
                <label>Price</label>
                <input type="text" onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div>
                <label>Quantity</label>
                <input type="text" onChange={(e) => setQuantity(e.target.value)} />
              </div>
              <div>
                <label>Image</label>
                <input type="file" onChange={(e) => handleImage(e)} />
              </div>
              <div>
                <button type="submit">Add product</button>
              </div>
            </form>
          </div>
        </React.Fragment>
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (data) =>
      dispatch({ type: "ADD_PRODUCT", payload: { data} }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);