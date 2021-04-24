import React, { Component } from "react";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSort = this.handleSort.bind(this);
  }
  handleSort(value1, value2) {
    this.props.onClickSort(value1, value2);
  }
  render() {
    let { task_orderBy, task_orderDir } = this.props;
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort by <span className="caret" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a
                role="button"
                onClick={() => this.handleSort("name", "asc")}
                href="/#"
              >
                Name ASC
              </a>
            </li>
            <li>
              <a
                role="button"
                onClick={() => this.handleSort("name", "desc")}
                href="/#"
              >
                Name DESC
              </a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a
                role="button"
                onClick={() => this.handleSort("level", "asc")}
                href="/#"
              >
                Level ASC
              </a>
            </li>
            <li>
              <a
                role="button"
                onClick={() => this.handleSort("level", "desc")}
                href="/#"
              >
                Level DESC
              </a>
            </li>
          </ul>
          <span className="label label-success label-medium">
            {task_orderBy} - {task_orderDir}
          </span>
        </div>
      </div>
    );
  }
}

export default Sort;
