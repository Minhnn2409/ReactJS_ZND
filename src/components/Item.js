import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }
  setItemLevel(level) {
    let Itemlevel = <span className="label label-success">small</span>;
    if (level === 1) {
      Itemlevel = <span className="label label-info">medium</span>;
    } else if (level === 2) {
      Itemlevel = <span className="label label-danger">high</span>;
    }
    return Itemlevel;
  }

  handleEdit(item) {
    this.props.handleEdit(item);
  }

  handleDelete(item) {
    this.props.onclickDelete(item);
  }
  render() {
    const { item, index } = this.props;
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{item.name}</td>
        <td className="text-center">{this.setItemLevel(item.level)}</td>
        <td>
          <button onClick={() => this.handleEdit(item)} type="button" className="btn btn-warning">
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
