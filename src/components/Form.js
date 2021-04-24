import React, { Component } from "react";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task_name: "",
			task_level: ""
		};
		this.closeForm = this.closeForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	closeForm() {
		this.props.closeForm();
	}

	handleChange(event) {
		let target = event.target;
		let value = target.value;
		let name = target.name;

		this.setState({
			[name]: value
		})
	}

	onSubmit(event) {
		let item = {
			task_name: this.state.task_name,
			task_level: this.state.task_level
		}
		this.props.onSubmit(item);
		event.preventDefault();
	}

	render() {
		let { editItem } = this.props;
		console.log(editItem);
		let task_name = this.state.task_name;
		let task_level = this.state.task_level;
		if (editItem.id !== "") {
			task_name = editItem.name;
			task_level = editItem.level;
		}
		return (
			<div className="row">
				<div className="col-md-offset-7 col-md-5">
					<form onSubmit={this.onSubmit} className="form-inline">
						<div className="form-group">
							<label className="sr-only" htmlFor="true">
								label
              </label>
							<input
								type="text"
								className="form-control"
								placeholder="Task Name"
								useref="taskn"
								name="task_name"
								value={task_name}
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label className="sr-only" htmlFor="true">
								label
              </label>
							<select
								id="inputDs"
								className="form-control"
								required="required"
								useref="tasklv"
								name="task_level"
								onChange={this.handleChange}
								value={task_level}
							>
								<option value={0}>Small</option>
								<option value={1}>Medium</option>
								<option value={2}>High</option>
							</select>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
            </button>
						<button
							onClick={this.closeForm}
							type="button"
							className="btn btn-default"
						>
							Cancel
            </button>
					</form>
				</div>
			</div>
		);
	}
}

export default Form;
