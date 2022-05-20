import React, { useRef, Component } from "react";

class SearchField extends Component {
  //  flow
  //  1. submit
  //  2. submit한 데이터 접근
  //  3. 접근한 데이터를 가지고 habit에 찍어내기 (submit >> habits로 옮기기)

  handleAddHabit = () => {
    console.log(this.input);
  };

  render() {
    return (
      <>
        <div className="searchField">
          <input
            type="text"
            className="add-input"
            placeholder="Habit"
            ref={(ref) => (this.input = ref)}
          />
          <button
            className="add-button"
            type="submit"
            onClick={this.handleAddHabit}
          >
            add
          </button>
        </div>
      </>
    );
  }
}

export default SearchField;
