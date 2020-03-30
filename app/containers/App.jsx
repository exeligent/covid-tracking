import React from "react";
import { connect } from "react-redux";
import {
  editRow,
  deleteRow,
  addRow,
  toggleDirection,
  getEthStatData
} from "../actions";

import DataMap from "../components/DataMap";
import DataTableBox from "../components/DataTableBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Regions from "../components/Regions";
import WorldStat from "../components/WorldStat";
import Statstics from "../components/Statstics";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditRow = this.handleEditRow.bind(this);
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
    this.handleAddRow = this.handleAddRow.bind(this);
    this.handleToggleDirection = this.handleToggleDirection.bind(this);
  }
  componentDidMount() {
    /*   Axios.get("http://127.0.0.1:5000/covid/top").then(res => {
      if (res.data) this.props.dispatch(getEthStatData(res.data));
    }); */
  }
  handleDeleteRow(regionName, code) {
    this.props.dispatch(deleteRow(regionName, code));
  }
  handleEditRow(regionName, newValue) {
    this.props.dispatch(editRow(regionName, newValue));
  }
  handleAddRow(regionName, code, value) {
    this.props.dispatch(addRow(regionName, code, value));
  }

  handleToggleDirection(newSortKey) {
    this.props.dispatch(toggleDirection(newSortKey));
  }
  render() {
    const { eth } = this.props;
    let statContent;
    if (!eth.length) {
      statContent = statContent = <Statstics />;
    } else {
      statContent = <Statstics />;
    }
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-8 row-card-padding ">
              <div className="  row card">
                <div className="col-md-12 color-white">
                  Last update 03/30/2020 at 8:05 (LT)
                </div>
                <div className="col-md-8">
                  <div className="datamap-outer-conainer">
                    <DataMap regionData={this.props.regionData} />
                  </div>
                </div>
                <div className="col-md-4 region-container">
                  <Regions regionData={this.props.regionData} />
                </div>
              </div>
            </div>
            <div className="col-md-4 row-card-padding">{statContent}</div>
          </div>
        </div>

        <WorldStat />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  regionData: React.PropTypes.array.isRequired,
  emptyRegions: React.PropTypes.array.isRequired,
  sortState: React.PropTypes.object.isRequired
};

function sortCollection(collection, sortState) {
  switch (sortState.direction) {
    case "ASC":
      return collection.sort(function(a, b) {
        if (a[sortState.key] > b[sortState.key]) return 1;
        if (a[sortState.key] < b[sortState.key]) return -1;
        return 0;
      });

    case "DESC":
      return collection.sort(function(a, b) {
        if (a[sortState.key] > b[sortState.key]) return -1;
        if (a[sortState.key] < b[sortState.key]) return 1;
        return 0;
      });

    default:
      return collection;
  }
}

function alphabeticOrder(collection) {
  return collection.sort(function(a, b) {
    if (a.regionName > b.regionName) return 1;
    if (a.regionName < b.regionName) return -1;
    return 0;
  });
}

function mapStateToProps(state) {
  return {
    regionData: sortCollection(state.regionData, state.sortState),
    emptyRegions: alphabeticOrder(state.emptyRegions),
    sortState: state.sortState,
    eth: state.eth
  };
}

export default connect(mapStateToProps)(App);
