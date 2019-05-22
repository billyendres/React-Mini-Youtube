import axios from "axios";

const KEY = "AIzaSyApL-yn5LvLcAsEuBYRG4tUTljlg2xqDYA";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});
