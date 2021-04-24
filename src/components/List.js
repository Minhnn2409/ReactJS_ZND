import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  render() {
    const items = this.props.items;
    const eleItems = items.map((item, index) => {
      return (
        <Item
          item={item}
          key={index}
          index={index}
          onclickDelete={this.props.onclickDelete}
          handleEdit={this.props.handleEdit}
        />
      );
    });
    return (
      <div className="panel panel-success">
        <div className="panel-heading">List Task</div>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                #
              </th>
              <th>Task</th>
              <th style={{ width: "20%" }} className="text-center">
                Level
              </th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>{eleItems}</tbody>
        </table>
      </div>
    );
  }
}

export default List;
