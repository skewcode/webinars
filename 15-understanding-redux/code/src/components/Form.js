import React from "react";
import axios from "axios";
import { fetching, fetchSuccess, fetchError } from "../actions/userInfoActions";

class Form extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    console.log(this.urlTextBox.value);

    const { dispatch } = this.props;

    dispatch(fetching());
    
    axios
      .get(this.urlTextBox.value)
      .then(response => {
        dispatch(fetchSuccess(response.data));
        console.log(response);
      })
      .catch(error => {
        dispatch(fetchError(error.message));
        console.log(error);
      });
  }

  render() {
    console.log("<Form/> Props: ", this.props);
    return (
      <div>
        <form>
          <input
            type="text"
            size="75"
            ref={node => {
              this.urlTextBox = node;
            }}
          />
          &nbsp;&nbsp;&nbsp;
          <input
            type="button"
            value="Get User Info..."
            onClick={this.handleClick}
          />
        </form>
      </div>
    );
  }
}

export default Form;
