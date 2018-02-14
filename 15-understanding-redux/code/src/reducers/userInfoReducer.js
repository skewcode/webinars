export default function userInfoReducer(
  state = {
    fetching: false,
    userData: {},
    error: "",
  },
  action,
) {
  let newState;

  switch (action.type) {
    case "FETCHING":
      newState = {
        ...state,
        fetching: true,
        userData: {},
        error: "",
      };
      break;
    case "FETCH_SUCCESS":
      newState = {
        ...state,
        fetching: false,
        userData: action.data,
        error: "",
      };
      break;
    case "FETCH_ERROR":
      newState = {
        ...state,
        fetching: false,
        userData: {},
        error: action.message,
      };
      break;
    default:
      newState = { ...state };
      break;
  }

  return newState;
}

/*
{
	fetching:false,
	userData: {},
	error:""
}
--------------------------------------------------------------
{
	type:"FETCHING"
}

{
	type:"FETCH_SUCCESS",
	data: {...
	}
}

{
	type:"FETCH_ERROR",
	message:"sdgsjdhsmdg"
}
*/
