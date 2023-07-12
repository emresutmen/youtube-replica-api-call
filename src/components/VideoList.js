import Video from "./Video";
import "../index.css"

const VideoList = ({ data, onVideoSelected }) => {
  return (
    <div className="video-list row">
      <div style={{ padding: "20px 0" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
            Video List
        </h3>
        <Video data={data} onVideoSelected={onVideoSelected} />
      </div>
    </div>
  );
};

export default VideoList;
