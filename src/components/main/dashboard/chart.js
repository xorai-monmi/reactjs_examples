import React from "react";
import { connect } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import PieChart from "highcharts-react-official";
import "../../../styles/main.css";
import * as actionTypes from "../../../reducers/dashboardActions";
import { dataBarChart, pieChartData } from "../../../data/chartData";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    /* this.state = {
      chartData: props.chartData,
      chartDataPie: props.chartDataPie
    }; */
  }

  componentWillMount() {
    this.props.addBarChart();
    this.props.addPieChart();
  }

  render() {
    return (
      <div className="col-lg-12">
        <div className="tile">
          <PieChart
            highcharts={Highcharts}
            options={this.props.dashboard.pieChartData}
          />
        </div>
        <div className="devider-vertical"></div>
        <div className="tile">
          <HighchartsReact
            highcharts={Highcharts}
            options={this.props.dashboard.chartData}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dashboard: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBarChart: () =>
      dispatch({
        type: actionTypes.BAR_CHART,
        dataBarChart: dataBarChart
      }),
    addPieChart: () =>
      dispatch({ type: actionTypes.PIE_CHART, pieChartData: pieChartData })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
