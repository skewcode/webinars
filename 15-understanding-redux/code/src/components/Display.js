import React from "react";

class Display extends React.Component {
  render() {
    console.log("<Display/> Props: ", this.props);

    return (
      <div>
        {this.props.fetching ? (
          <h2 style={{ color: "blue" }}>"Fetching data from GitHub..."</h2>
        ) : (
          <div>
            <h3>Name: {this.props.userData.name}</h3>
            <h3>Bio: {this.props.userData.bio}</h3>
            <h3>Location: {this.props.userData.location}</h3>
            <h3>Company: {this.props.userData.company}</h3>
            <h3>GitHub Login: {this.props.userData.login}</h3>
          </div>
        )}
        <h2>{this.props.error}</h2>
      </div>
    );
  }
}

export default Display;
