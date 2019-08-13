import React, {Component} from 'react'
import axios from 'axios'

import NavigationBar from '../components/NavigationBar'

class SecondPage extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      users: [],
      by: false,
      name: ''
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/api/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  changeInput(field) {
    return event => {
      const { value } = event.target;

      this.setState({ [field]: value });
    };
  }

  edit(user, name) {
    fetch(`http://localhost:8081/api/user`, {
      method: 'PUT',
      body: JSON.stringify({
        id: user._id,
        name: name
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }

  handleEdit = () => {
    this.setState({
      by: true
    });
  };

  delete(user) {
    axios.delete(`http://localhost:8081/api/user/${user._id}`);
    let todoListCopy = this.state.users; // grab a copy of the todo list
    for (let i = 0; i < todoListCopy.length; i++) {
      let users = todoListCopy[i];
      if (users._id === user._id) {        // if it’s the correct ID...
        todoListCopy.splice(i, 1); // delete the item
        break                      // we’re done! break the loop
      }
    }
    this.setState({users: todoListCopy}) // we update state
  }

  render() {
    return (
      <div className='main'>
        <NavigationBar back='/' forward='/third'/>
        Users:
        <ul>
          { this.state.users.map(user =>
            <li key={user._id}>
              {user.name}
              <button type="submit" onClick={this.handleEdit}>
                Edit
              </button>
              {
                this.state.by &&
                <form onSubmit={this.edit(user, this.state.name)}>
                  <input type='text' required
                         value={this.state.name}
                         placeholder='Username'
                         onChange={this.changeInput('name')} />
                </form>
              }
              <button type="submit" onClick={e => this.delete(user)}>
                Delete
              </button>
            </li>)}
        </ul>
      </div>
    );
  }
}

export default SecondPage;
