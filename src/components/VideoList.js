import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
	render() {
		const { videos, onVideoSelect } = this.props;
		const renderedList = videos.map(video => {
			return (
				<VideoItem
					key={video.id.videoId}
					video={video}
					onVideoSelect={onVideoSelect}
				/>
			);
		});
		return (
			<div>
				<div className="ui relaxed divided list">{renderedList}</div>
			</div>
		);
	}
}

export default VideoList;
