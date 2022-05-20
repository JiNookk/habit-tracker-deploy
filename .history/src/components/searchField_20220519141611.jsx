import React, { Component } from "react";

class SearchField extends Component {
  render() {
    return (
      <>
        <input type="text" className="add-input" placeholder="Habit" />
        <button className="add-button">Add</button>
      </>
    );
  }
}

export default SearchField;
