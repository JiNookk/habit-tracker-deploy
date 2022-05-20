import React, { Component } from "react";

class SearchField extends Component {
  //  flow
  //  1. submit
  //  2. submit한 데이터 접근
  //  3. 접근한 데이터를 가지고 habit에 찍어내기 (submit >> habits로 옮기기)

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
