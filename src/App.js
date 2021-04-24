import React, { Component } from "react";
import Title from "./components/Title";
import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import Tasks from "./mocks/Tasks";
import { includes, filter, orderBy, remove } from "lodash";
import "./App.css";
const { v4: uuidv4 } = require("uuid");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Tasks,
      isShowForm: false,
      strSearch: "",
      task_orderBy: "name",
      task_orderDir: "asc",
      task_name: "",
      task_level: "",
      editItem: null
    };
    this.handleShowForm = this.handleShowForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.onClickSearch = this.onClickSearch.bind(this);
    this.onClickSort = this.onClickSort.bind(this);
    this.onclickDelete = this.onclickDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  //SHOW_FORM
  handleShowForm() {
    this.setState({
      isShowForm: !this.state.isShowForm,
    });
  }
  closeForm() {
    this.setState({
      isShowForm: false,
    });
  }

  //FORM
  //ADD_FORM
  onSubmit(item) {
    let { items } = this.state;
    items.push({
      id: uuidv4(),
      name: item.task_name,
      level: +item.task_level,
    });

    this.setState({
      items: items,
      isShowForm: false
    });
  }

  //EDIT_FORM
  handleEdit(item) {
    this.setState({
      editItem: item,
      isShowForm: true
    })
  }

  //SEARCH
  onClickSearch(value) {
    this.setState({
      strSearch: value,
    });
  }


  //SORT
  onClickSort(value1, value2) {
    this.setState({
      task_orderBy: value1,
      task_orderDir: value2,
    });
  }


  //DELETE
  onclickDelete(value) {
    let items = this.state.items;
    remove(items, (item) => {
      return item.id === value.id;
    });
    this.setState({
      items: items,
    });
  }


  render() {
    let itemsOrigin = this.state.items;
    let items = [];
    let showForm = null;
    let { task_orderBy, task_orderDir, strSearch } = this.state;
    if (this.state.isShowForm) {
      showForm = <Form
        closeForm={this.closeForm}
        onSubmit={this.onSubmit}
        editItem={this.state.editItem}
      />;
    }

    items = filter(itemsOrigin, (item) => {
      return includes(item.name.toLowerCase(), strSearch.toLowerCase());
    });
    items = orderBy(items, task_orderBy, task_orderDir);
    return (
      <div className="container">
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control
          isShowForm={this.state.isShowForm}
          handleShowForm={this.handleShowForm}
          onClickSearch={this.onClickSearch}
          task_orderBy={this.state.task_orderBy}
          task_orderDir={this.state.task_orderDir}
          onClickSort={this.onClickSort}
        // handleSearch={this.handleSearch}
        />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/* FORM : START */}
        {showForm}
        {/* FORM : END */}
        {/* LIST : START */}
        <List
          onclickDelete={this.onclickDelete} items={items}
          handleEdit={this.handleEdit}

        />
        {/* LIST : END */}
      </div>
    );
  }
}

export default App;
