import React, { Component } from "react";

class SearchField extends Component {
  render() {
    return (
      <>
        <div className="searchField">
          <input type="text" className="add-input" placeholder="Habit" />
          <button className="add-button" type="text"></button>
        </div>
      </>
    );
  }
}

export default SearchField;
