import React, { Component } from "react";

class SearchField extends Component {
  handleChange(event) {
    // this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    // alert(' A name was submitted: ' + this.state.value)
    // event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="searchField">
          <input type="text" className="add-input" placeholder="Habit" />
          <button
            className="add-button"
            type="submit"
            onSubmit={function (e) {
              console.log(e);
            }}
          >
            add
          </button>
        </div>
      </>
    );
  }
}

export default SearchField;
