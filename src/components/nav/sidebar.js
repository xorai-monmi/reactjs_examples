import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

class SideBar extends React.Component {
  /*componentDidMount() {
  }*/

  renderSubMenu(items) {
    return items.map(item => {
      return (
        <li className="flex" key={item.name}>
          <a href="#" id="open-btn">
            <span className="sidebar-title">{item.name}</span>
          </a>
        </li>
      );
    });
  }

  renderSideBar() {
    return this.props.sideBarNameItem.map((item, index) => {
      let id = `sidebar-second-level_${index}`;
      let collapseddataTarget = `#${id}`;
      if (item.children) {
        return (
          <li id="ec_btn" className="flex" key={item.class}>
            <a
              href="#"
              id="open-btn"
              onClick={item.action}
              data-toggle="collapse"
              data-target={collapseddataTarget}
            >
              <i className={item.class}></i>
              <span className="sidebar-title">{item.title}</span>
              <span className="fa fa-chevron-down font-color sidebar-expand-collapse"></span>
            </a>

            <ul id={id} className="collapse sidebarsecondlevel" name="abcd">
              {this.renderSubMenu(item.children)}
            </ul>
          </li>
        );
      }
      return (
        <li className="flex" key={item.class}>
          <a href="#" id="open-btn" onClick={item.action}>
            <i className={item.class}></i>
            <span className="sidebar-title">{item.title}</span>
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <div id="mySidenav" className="sidenav">
        <a href="#" className="closebtn" onClick={this.props.closeNav}>
          <button className=" btn">
            <i className="fa fa-arrow-left"></i>
          </button>
        </a>
        <ul id="side">{this.renderSideBar()}</ul>
      </div>
    );
  }
}

export default SideBar;
