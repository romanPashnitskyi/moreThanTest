import React, {Component} from 'react'

import NavigationBar from '../components/NavigationBar'
import './MainPage.scss'

class MainPage extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      name: '',
      message: false,
      error: null
    };

    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(field) {
    return event => {
      const { value } = event.target;

      this.setState({ [field]: value });
    };
  }

  handleSubmit = (evt) => {
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

  render() {
    return (
      <div className='main'>
        <NavigationBar back='/third' forward='/second'/>
        <form className='form' onSubmit={this.handleSubmit}>
          <input type='text' required
                 value={this.state.name}
                 placeholder='Username'
                 onChange={this.changeInput('name')} />
          <input type='submit'
                 value='Add user'
                 className='button' />
        </form>
        <div className='message'>
          {
            (this.state.error && <p style={{color: 'red'}}>Error</p>) ||
            (this.state.message && <p style={{color: 'limegreen'}}>User added!</p>)
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    settings: state.settings
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (location, units) => {
      dispatch(fetchData(location, units))
    }
  }
};

export default MainPage;
