import React from "react";

const VideoDetail = ({ video }) => {
  const videoUrl = `https://youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="Youtube Video Player" src={videoUrl} />
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
