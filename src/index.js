import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import "./styles/nav.css";
import "./styles/style.css";
import $ from "jquery";
import reducer from "./reducers/dashboardReducer";
$(window).on("load", () => {
  closeNav();
});
const closeNav = function() {
  document.getElementById("mySidenav").style.width = "45px";
  const x = document.getElementsByClassName("sidebar-title");
  //const body = document.getElementsByName("body");
  for (let a of x) {
    a.style.display = "none";
  }
  const z = document.getElementsByName("abcd");
  // for (let a of z) {
  //   a.style.display = "none";
  // }

  document.querySelector("#open-btn").style.display = "block";
  if ($("body").hasClass("side-nav-collapsed")) {
    $("body").removeClass("side-nav-collapsed");
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App closeNav={closeNav} />
  </Provider>,
  document.getElementById("root")
);
