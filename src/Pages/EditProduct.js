import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router";
import { connect } from 'react-redux';
import Header from "./Header";

const EditProduct = (props) => {

  let { id } = useParams();
  
  const [isUpdate, setUpdate] = useState(false)
  const [products, setProducts] = useState([]);

  const [name, setName] = useState('')
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [url, setUrl] = useState("");
  
  useEffect(() => {
    setProducts(props.products);
    let vv = products.filter((el) => el.id === parseInt(id));
    if(vv.length > 0){
     setName(vv[0].name);
     setDetail(vv[0].detail);
     setPrice(vv[0].price);
     setQuantity(vv[0].quantity);
     setUrl(vv[0].imgURL);
   }

  }, [props.products, id, products]);

  
  function handleFormSubmit(e) {
    e.preventDefault();
    var el = {
      name,
      detail,
      price,
      quantity,
      imgURL: url,
    };

    props.updateProduct(id, el);
    setUpdate(true);
  }

  const handleImage = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setUrl(reader.result);
    };
  }
  return isUpdate || (props.user.isLogged === false) ? (
    <Navigate to="/" />
  ) : (
    <React.Fragment>
      <Header name="Aslam khan" />
      <div className="container">
        <div className="text-center py-md-3">
          <h3 className="display-4">Edit Product</h3>
          <p>edit product detail and hit submit to save it.</p>
        </div>
        <form onSubmit={(e) => handleFormSubmit(e)} className="add--product__form">
          <div>
            <label>Product Title</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              onChange={(e) => setDetail(e.target.value)}
              rows={4}
              value={detail}
            ></textarea>
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="text"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
          </div>
            
          <div>
              <label>Image</label>
              <img src={url} style={{width: 150, objectFit: "contain", marginBottom: 10}} alt="" />
            <input type="file" onChange={(e) => handleImage(e)} />
          </div>
          <div>
            <button type="submit">Save changes</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => dispatch({ type: "GET_PRODUCT" }),
    updateProduct: (a,b) => dispatch({type:'EDIT_PRODUCT', payload: {id: parseInt(a), product: b}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
