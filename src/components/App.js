import React, { Component } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "./api/youtubeApi";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { videos: [], selectedVideo: null };
	}

	//Render default video(popular)
	componentDidMount() {
		this.onTermSubmit("popular");
	}

	onTermSubmit = async searchTerm => {
		//Preconfigured instance of axios.create
		//Using youtube params and q for query results
		const response = await youtube.get("/search", {
			params: {
				q: searchTerm
			}
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
