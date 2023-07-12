
import "./App.css";
import SearchBar from "./components/SearchBar";
import React from "react";
import youtubeApi from "./api/youtube.js";
import VideoList from "./components/VideoList";
import Videoplayer from "./components/VideoPlayer";

export default class App extends React.Component {
  state = {
    videoMetaInfo: [],
    selectedVideoId: null,
  };

  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId,
    });
  };

  onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
      },
    });

    //console.log(response);

    this.setState({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="main container-max-width">
        <div class="row"><SearchBar onSearch={this.onSearch} /></div>
        <div class="row">
  
        <div class="col-7">
          <Videoplayer videoId={this.state.selectedVideoId}/></div> 
     
          <div class="col-5"><VideoList 
          onVideoSelected={this.onVideoSelected}
          data={this.state.videoMetaInfo}
        />
        </div>
        </div>
      </div>
    );
  }
}
