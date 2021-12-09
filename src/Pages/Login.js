import { useState } from "react";
import {Navigate} from 'react-router'
import { connect } from 'react-redux';

const Login = props => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [classes, setClasses] = useState('alert-danger');
    const [msg, setMsg] = useState("Please enter valid credential.");
    const [isVisible, setVisible] = useState('none');
    const [isSuccess, setSuccess] = useState(props.user.isLogged);
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (name === props.user.name && email === props.user.email) {
        setVisible("block");
        setClasses("alert-success");
        setMsg("Login successfully");
        props.login();
        setTimeout(() => {
          setVisible("none");
          setSuccess(true)
        }, 1500);        
      } else {
        setVisible('block');
        setSuccess(false);
        setTimeout(() => {
          setVisible('none');
          document.querySelector('form').reset()
        },1500)
      }
    }

  return isSuccess ? (
    <Navigate to="/" />
  ) : (
    <form onSubmit={(e) => handleLogin(e)} className="login--form">
      <h2 className="login--form__title">Login Please!</h2>
      <p className="login--form__description">Please login to proceed next.</p>
      <div className={`alert ${classes}`} style={{ display: isVisible }}>
        {msg}
      </div>
      <label className="login--form__label">Name</label>
      <input
        type="name"
        onChange={(e) => setName(e.target.value)}
        className="login--form__input"
      />

      <label className="login--form__label">Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="login--form__input"
      />

      <button className="login--form__btn" type="submit">
        Login
      </button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login : () => dispatch({ type: "USER_LOGIN" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);