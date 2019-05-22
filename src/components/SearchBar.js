import React, { Component } from "react";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { searchTerm: "" };
	}

	inputChange = evt => {
		this.setState({ searchTerm: evt.target.value });
	};

	formSubmit = evt => {
		evt.preventDefault();
		this.props.onFormSubmit(this.state.searchTerm);
	};

	render() {
		return (
			<div className="SearchBar ui segment">
				<form onSubmit={this.formSubmit} className="ui form">
					<div className="field">
						<label>Video Search</label>
						<input
							type="text"
							value={this.state.searchTerm}
							onChange={this.inputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
