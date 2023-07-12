import React from "react";
import "../index.css"

const Videoplayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
      Selected Video
      </p>
    );
  }
  return (
    <div className="video-player">
          <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", padding:"10px" }}>
      Selected Video
      </p>
      <iframe
        title={videoId}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </div>
  );
};

export default Videoplayer;
