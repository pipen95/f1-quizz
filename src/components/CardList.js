import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchDrivers } from './redux/actions/fetchDrivers';
import { fetchStats } from "./redux/actions/fetchStats";
import CardItem from "../components/CardItem";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
  }

  componentDidMount() {
    // this.props.fetchDrivers();
    this.props.fetchStats();
  }

  render() {
    const driversItems = this.props.drivers.drivers.map((driver, idx) => (
      <CardItem
        stats={driver}
        driver={driver.Driver}
        idx={idx}
        key={idx}
        constructor={driver.Constructor}
      />
    ));

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {driversItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  drivers: state.drivers,
});

export default connect(mapStateToProps, { fetchStats })(CardList);
