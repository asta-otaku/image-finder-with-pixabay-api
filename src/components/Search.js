import React, { Component } from "react";
import axios from "axios";
import ImageResults from "./ImageResults";

export class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "29715041-0ed449c70bb51339782e8639c",
    images: [],
  };
  apiCall = () => {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
      )
      .then((res) => this.setState({ images: res.data.hits }))
      .catch((err) => console.log(err));
  };
  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, this.apiCall);
  };
  onAmountChange = (e) => {
    this.setState({ amount: e.target.value }, this.apiCall);
  };
  render() {
    return (
      <div>
        <input
          className="search-input"
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          placeholder="Search For Images"
        />
        <br />
        <select
          name="amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
