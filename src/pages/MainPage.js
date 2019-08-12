import React, {Component} from 'react'
import {connect} from 'react-redux';

import NavigationBar from '../components/NavigationBar'
import {fetchData} from '../actions/mainAction';
import './MainPage.scss'

class MainPage extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      name: ''
    };

    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(field) {
    return event => {
      const { value } = event.target;

      this.props.main.name = value;
      this.setState({ [field]: value });
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.fetchData(this.props.main.name, this.props.main.error, this.props.main.message);
  };

  render() {
    return (
      <div className='main'>
        <NavigationBar back='/third' forward='/second'/>
        <form className='form' onSubmit={this.handleSubmit}>
          <input type='text' required
                 value={this.props.main.name}
                 placeholder='Username'
                 onChange={this.changeInput('name')} />
          <input type='submit'
                 value='Add user'
                 className='button' />
        </form>
        <div className='message'>
          {
            (this.props.main.error && <p style={{color: 'red'}}>Error</p>) ||
            (this.props.main.message && <p style={{color: 'limegreen'}}>User added!</p>)
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    main: state.main
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (name, error, message) => {
      dispatch(fetchData(name, error, message))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
