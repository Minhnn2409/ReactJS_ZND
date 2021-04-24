import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleShowForm = this.handleShowForm.bind(this);
  }

  handleShowForm() {
    this.props.handleShowForm();
  }

  render() {
    let elmButton = (
      <button
        onClick={this.handleShowForm}
        type="button"
        className="btn btn-info btn-block"
      >
        Add Task
      </button>
    );

    if (this.props.isShowForm === true) {
      elmButton = (
        <button
          onClick={this.handleShowForm}
          type="button"
          className="btn btn-success btn-block"
        >
          Close Task
        </button>
      );
    }

    return (
      <div className="row">
        {/* SEARCH : START */}
        <Search onClickGo={this.props.onClickSearch} />
        {/* SEARCH : END */}
        {/* SORT : START */}
        <Sort
          task_orderBy={this.props.task_orderBy}
          task_orderDir={this.props.task_orderDir}
          onClickSort={this.props.onClickSort}
        />
        {/* SORT : END */}
        {/* ADD : START */}
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">{elmButton}</div>
        {/* ADD : END */}
      </div>
    );
  }
}

export default Control;
