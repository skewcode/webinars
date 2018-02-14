import { connect } from "react-redux";
import Display from "../components/Display";

function mapStateToProps(state, ownProps) {
  return {
    fetching: state.fetching,
    userData: state.userData,
    error: state.error,
  };
}

const DisplayContainer = connect(mapStateToProps)(Display);

export default DisplayContainer;
