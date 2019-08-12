export const fetchData = (evt) => {
  evt.preventDefault();

  fetch(`http://localhost:8081/api/user`, {
    method: 'POST',
    body: JSON.stringify({
      name: this.state.name
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response  => {
    if (!response.ok) {
      this.setState({
        error: true
      })
    }
  }).then(response  => {
    this.setState({
      message: true
    })
  }).catch(error => console.log(error));

  this.setState({
    name: '',
    error: null
  });
};
