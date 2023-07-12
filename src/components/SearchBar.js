import React from "react";
import "../index.css"

class SearchBar extends React.Component {
  state = { title: "" };

  onSearchChanged = (event) => {
    const _title = event.target.value;

    console.log(_title);

    this.setState({ title: _title });
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.props.onSearch(this.state.title);
  };

  render() {
    return (
     
      <div class="row search-form">
        <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
      Search for a Video
      </p>
        <div class="col-md-3"></div>
        <form class="col-md-6" onSubmit={this.onSubmit}>
          <div className="form-controls">
            <label>Search Bar</label>
            <input
              value={this.state.title}
              onChange={this.onSearchChanged}
              id="video-search"
              type="text"
              placeholder="Enter Search Keyword"
            ></input>
          </div>
        </form>
        <div class="col-md-3"></div>
      </div>
    );
  }
}

export default SearchBar;
