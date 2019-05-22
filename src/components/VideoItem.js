import React, { Component } from "react";
import "./VideoItem.css";

class VideoItem extends Component {
	render() {
		const { video, onVideoSelect } = this.props;
		return (
			// find video properties in network results xhr
			<div onClick={() => onVideoSelect(video)} className="video-item item">
				<img
					className="ui image"
					src={video.snippet.thumbnails.medium.url}
					alt={video.snippet.title}
				/>
				<div className="content">
					<div className="header">{video.snippet.title}</div>
				</div>
			</div>
		);
	}
}

export default VideoItem;
