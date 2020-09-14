import React from "react";
import Highcharts from "highcharts";
import TopNav from "./nav/topnav";
import SideBar from "./nav/sidebar";
import Main from "./main/dashboard/main";
import MainMobile from "./main/dashboard/MainMobile";
import $ from "jquery";
import * as actionTypes from "../reducers/dashboardActions";
import { formData } from "../data/testFormData";
import { connect } from "react-redux";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sideBarNameItem: [],
      chartData: {}
    };
  }
  //first lifecycle method
  componentWillMount() {
    this.getSideBarNameItem();
    this.getBarChartData();
    this.getPieChartData();
    this.props.bindFormDataState();
  }

  getSideBarNameItem() {
    //ajax call
    this.setState({
      sideBarNameItem: [
        {
          class: "fa fa-arrow-right",
          action: this.openNav,
          title: "",
          id: ""
        },
        {
          class: "fa fa-list",
          action: null,
          title: "Dashboard",
          id: "",
          children: [
            {
              name: "My Dashboard",
              url: "/child31",
              id: ""
            },
            {
              name: "Enterprise Dashboard",
              url: "/child32",
              id: ""
            }
          ]
        },
        {
          class: "fa fa-desktop fa-lg",
          action: null,
          title: "Monitor",
          id: "",
          children: [
            {
              name: "Alerts",
              url: "/child31",
              id: ""
            },
            {
              name: "Fraud Detection",
              url: "/child32",
              id: ""
            }
          ]
        },
        {
          class: "fa fa-cog fa-lg",
          action: null,
          title: "Setup",
          id: "",
          children: [
            {
              name: "Notification",
              url: "/child31",
              id: ""
            }
          ]
        }
      ]
    });
  }

  getBarChartData() {
    this.setState({
      chartData: {
        chart: {
          type: "column"
        },
        title: {
          text: "Monthly sales trend"
        },
        xAxis: {
          categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"]
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total fruit consumption"
          },
          stackLabels: {
            enabled: true,
            style: {
              fontWeight: "bold",
              color:
                // theme
                (Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color) ||
                "gray"
            }
          }
        },
        legend: {
          align: "right",
          x: -30,
          verticalAlign: "top",
          y: 25,
          floating: true,
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || "white",
          borderColor: "#CCC",
          borderWidth: 1,
          shadow: false
        },
        tooltip: {
          headerFormat: "<b>{point.x}</b><br/>",
          pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
        },
        plotOptions: {
          column: {
            stacking: "normal",
            dataLabels: {
              enabled: true
            }
          }
        },
        series: [
          {
            name: "John",
            data: [5, 3, 4, 7, 2]
          },
          {
            name: "Jane",
            data: [2, 2, 3, 2, 1]
          },
          {
            name: "Joe",
            data: [3, 4, 4, 2, 5]
          }
        ]
      }
    });
  }

  getPieChartData() {
    this.setState({
      chartDataPie: {
        title: {
          text: "Top Selling Product"
        },
        chart: {
          type: "pie"
        },
        series: [
          {
            data: [
              {
                y: 100
              },
              {
                y: 25
              },
              {
                y: 10
              },
              {
                y: 5
              }
            ]
          }
        ]
      }
    });
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "215px";
    document.querySelector("#open-btn").style.display = "none";
    $("body").addClass("side-nav-collapsed");
    if (!$("body").hasClass("side-nav-collapsed")) {
      $("body").addClass("side-nav-collapsed");
    }

    const x = document.getElementsByClassName("sidebar-title");
    for (let a of x) {
      a.style.display = "block";
    }
    const z = document.getElementsByClassName("sidebar-second-level");
    for (let a of z) {
      a.style.display = "block";
    }
  }
  render() {
    return (
      <div className="fullHeight fullWidth">
        <TopNav />
        <SideBar
          sideBarNameItem={this.state.sideBarNameItem}
          closeNav={this.props.closeNav}
        />
        <Main
          chartData={this.state.chartData}
          chartDataPie={this.state.chartDataPie}
        />
        {/* <MainMobile></MainMobile> */}
        <div className="footer">Footer</div>
      </div>
    );
  }
}

//export default App;
const mapStateToProps = state => {
  return {
    dashboard: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    bindFormDataState: () =>
      dispatch({
        type: actionTypes.BIND_FORM_DATA_STATE,
        formData: formData
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
