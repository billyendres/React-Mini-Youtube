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
			<div
				style={{
					marginTop: "3em",
					marginBottom: "3em",
					backgroundColor: "rgba(0, 0, 1, 0.6)"
				}}
				className="SearchBar ui segment"
			>
				<form onSubmit={this.formSubmit} className="ui form">
					<div className="field">
						<label
							style={{
								color: "white",
								fontSize: "2em",
								textAlign: "center",
								padding: "0.5em"
							}}
						>
							SEARCH FOR A VIDEO
						</label>
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
