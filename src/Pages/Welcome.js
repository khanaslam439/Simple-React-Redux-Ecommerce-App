import React, {  useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Header from "./Header";
const Welcome = props => {
  const [isVisible, setVisible] = useState(props.user.isLogged);
  const [change, setChange] = useState(0);
  
  const handleLogout = () => {
    setVisible(false);
    props.logout();
  }

  useEffect(() => {
    if (props.user.isLogged === 0) {
      handleLogout();
    }
  })

  const handleDelete = (id) => {
    props.deleteProduct(id);
    setChange(change + 1)
    console.log(props.user)
  }

  const handleSearch = (e) => {
    var textInput = e.target.value;
    var tds = document.querySelectorAll('table tbody tr td:nth-child(2)');
    tds.forEach(
      (el) => (el.parentElement.style.display = el.innerHTML.includes(textInput)
          ? "table-row"
          : "none"
        )
    );
  }
   return isVisible ? (
     <React.Fragment>
       <Header name="Aslam khan" clickme={() => handleLogout()} />
       <div className="container">
         <h4 className="text-center display-4 py-3">Product Listing</h4>
         <div className="row mt-3 align-items-center justify-content-between">
           <div className="col-md-3">
             <div className="search--product">
               <input type="text" onKeyUp={(e) => handleSearch(e)} />
               <i className="material-icons">search</i>
             </div>
           </div>
           <div className="col-md-3 text-end">
             <Link
               to="/add-product"
               className="text-md-right add--product__btn"
             >
               Add Product
             </Link>
           </div>
         </div>
         <div className="row">
           <div className="col-md-12">
             <section>
               <table className="table table-hover product--list">
                 <thead>
                   <tr>
                     <th>S.No</th>
                     <th style={{ width: "30%" }}>Product</th>
                     <th style={{ width: "45%" }}>Description</th>
                     <th>Price</th>
                     <th>Quantity</th>
                     <th>Action</th>
                   </tr>
                 </thead>
                 <tbody>
                   {props.products.map((el, index) => (
                     <tr key={index}>
                       <td>{index + 1}.</td>
                       <td>
                         <div className="d-flex align-items-start">
                           <img
                             src={
                               el.imgURL === ""
                                 ? "https://via.placeholder.com/50"
                                 : el.imgURL
                             }
                             alt=""
                           />
                           <p>{el.name}</p>
                         </div>
                       </td>
                       <td>{el.detail}</td>
                       <td>{el.price}</td>
                       <td>{el.quantity}</td>
                       <td>
                         <Link to={"/edit-product/" + el.id}>
                           <i className="material-icons">edit</i>
                         </Link>
                         <Link to="" onClick={() =>handleDelete(el.id)}>
                           <i className="material-icons">delete</i>
                         </Link>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </section>
           </div>
         </div>
       </div>
     </React.Fragment>
   ) : (
     <Navigate to="/login" />
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
    deleteProduct: (id) => dispatch({type: 'DELETE_PRODUCT', id: id}),
    logout: () => dispatch({ type: "USER_LOGOUT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);