import React, {Component} from 'react'
import axios from 'axios'

import NavigationBar from '../components/NavigationBar'

class SecondPage extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/api/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <div className='main'>
        <NavigationBar back='/' forward='/third'/>
        Users:
        <ul>
          { this.state.users.map(user => <li key={user._id}>{user.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default SecondPage;
