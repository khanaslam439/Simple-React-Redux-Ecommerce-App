const Header = props => {
    return (
      <header className="page--header">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <h2 className="header--title">
              <img
                src={process.env.PUBLIC_URL + "/logo192.png"}
                width={30}
                style={{ marginRight: 10 }}
                alt=""
              />
              Hi {props.name}
            </h2>
            <button className="header--btn__logout" onClick={props.clickme}>
              <i className="material-icons">logout</i>logout
            </button>
          </div>
        </div>
      </header>
    );
}

export default Header;