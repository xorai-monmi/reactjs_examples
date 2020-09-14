import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

class TopNav extends React.Component {
  /*componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }*/
  render() {
    const logoFontSize = {
      "font-size": "25px",
      "font-weight": "800",
      "padding-right": "50px"
    };
    const colorRed = {
      color: "red"
    };
    const analyticsDropDown = {
      position: "absolute",
      left: "auto",
      padding: "0px !important",
      margin: "0px !important"
    };
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark topnavbar">
        <div style={logoFontSize}>
          <span style={colorRed}>xor</span>ai
        </div>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav  ml-auto ">
              <li className="nav-item">
                <a className="nav-link " href="#">
                  <span className="fa fa-bell"></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  data-target="dropdown"
                  role="button"
                >
                  Bhaskar Deka
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#"></a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown"
                  data-toggle="dropdown"
                  role="button"
                >
                  Support
                </a>
                <div className="dropdown-menu" data-target="#dropdown">
                  <a className="dropdown-item" href="#">
                    Help Center
                  </a>
                  <a className="dropdown-item" href="#">
                    Forums
                  </a>
                  <a className="dropdown-item" href="#">
                    Documentation
                  </a>
                  <a className="dropdown-item" href="#">
                    Training
                  </a>
                  <a className="dropdown-item" href="#">
                    Other Resources
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ left: "0", "font-size": "16px", "font-weight": "500" }}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="dropdown"
            data-toggle="dropdown"
            role="button"
          >
            Analytics
          </a>
          <div
            className="dropdown-menu analyticsDropDown"
            data-target="#dropdown"
          >
            <a className="dropdown-item" href="#">
              Reports
            </a>
            <a className="dropdown-item" href="#">
              Configuration
            </a>
            <a className="dropdown-item" href="#">
              Administration
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNav;
