import React from "react";
import HighchartsReact from "highcharts-react-official";
import PieChart from "highcharts-react-official";
import "../../../styles/main.css";
import * as actionTypes from "../../../reducers/dashboardActions";
import { connect } from "react-redux";

class MainMobile extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.ratingItem.items.map(item => {
      return (
        <li
          key={item.rating}
          className={`ratingBtn  floatLeft ${
            this.props.reducer_active_item === item.rating
              ? "rating-active"
              : ""
          }`}
          onClick={() => this.props.selectRating(item.rating)}
        >
          {item.rating}
        </li>
      );
    });
  }

  render() {
    return (
      <section id="body" className="mainSection">
        <div className="headerMsg">
          Based on this conversation how likely are you to recommend Expedia to
          a friend, relative or a colleague
        </div>
        <div className="fullWidth sectionHeight">
          <div className="panel-mobile floatLeft">
            <div className="panel-tile-mobile contentFloatLeft">
              Not al all likely
            </div>
            <div className="panel-tile-mobile contentFloatRight">
              Extremely likely
            </div>
          </div>
          <ul className="panel-mobile list-none">{this.renderList()}</ul>
          <div className="divCenter">
            <button className="button buttonMedium">Next</button>
          </div>
        </div>
        <div className="mobile-footer"></div>
      </section>
    );
  }
}

//export default MainMobile;
const mapStateToProps = state => {
  return {
    ratingItem: state.ratingItem,
    reducer_active_item: state.ratingItem.itemSelected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectRating: itemNumber =>
      dispatch({
        type: actionTypes.SELECT_ITEM,
        selectedItem: itemNumber
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMobile);
