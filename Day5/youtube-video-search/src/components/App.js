import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };
  const onVideoSelect = (video) => {
    console.log("FROM THE APP", video);
    setSelectedVideo(video);
  };
  useEffect(() => {
    onTermSubmit('taylor swift songs');
    console.log("YES");
  },[]);
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
          {selectedVideo && <VideoDetail video={selectedVideo} />}
          </div>
          <div className="five wide column">
          {videos && <VideoList onVideoSelect={onVideoSelect} videos={videos} />}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;
