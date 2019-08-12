let data = {};

export const fetchData = (name, error, message) => (dispatch) => {

  data.name = name;

  fetch(`http://localhost:8081/api/user`, {
    method: 'POST',
    body: JSON.stringify({
      name: name
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response  => {
    if (!response.ok) {
      data.error = true;
      dispatch({
        type: 'FETCH_DATA_FULFILLED',
        payload: data
      })
    }
  }).then(response  => {
    data.message = true;
    dispatch({
      type: 'FETCH_DATA_FULFILLED',
      payload: data
    })
  }).catch(error => console.log(error));

  data.error = null;
};
