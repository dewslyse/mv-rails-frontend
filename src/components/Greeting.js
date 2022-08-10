import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import '../App.css';

const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

function getGreeting() {
  return async (dispatch) => {
    dispatch({ type: GET_GREETING_REQUEST });
    try {
      const response = await fetch('http://localhost:3000/api/v1/greetings');
      const json = await response.json();
      return dispatch(retrievedGreeting(json));
    } catch (error) {
      return console.log(error);
    }
  };
}

export function retrievedGreeting(json) {
  return {
    type: GET_GREETING_SUCCESS,
    payload: json,
  };
}

class Greeting extends React.Component {
  render() {
    return (
      <div className="advice">
        <h2>{this.props.greeting}</h2>
        <button onClick={() => this.props.getGreeting()}>Get Advice</button>
      </div>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greeting: (state) => state.greeting,
});

const mapDispatchToProps = { getGreeting };

Greeting.propTypes = {
  greeting: PropTypes.string,
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
