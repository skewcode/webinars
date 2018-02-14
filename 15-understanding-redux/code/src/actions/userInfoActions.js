export function fetching() {
  return {
    type: "FETCHING",
  };
}

export function fetchSuccess(data) {
  return {
    type: "FETCH_SUCCESS",
    data,
  };
}

export function fetchError(message) {
  return {
    type: "FETCH_ERROR",
    message,
  };
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
