const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

const initialState = {
  greeting: 'Want some advice? Click the button below! 👇',
};

export function retrievedGreeting(json) {
  return {
    type: GET_GREETING_SUCCESS,
    payload: json,
  };
}

export const getGreeting = () => async (dispatch) => {
  dispatch({ type: GET_GREETING_REQUEST });
  try {
    const response = await fetch('http://localhost:3000/api/v1/greetings');
    const json = await response.json();
    return dispatch(retrievedGreeting(json));
  } catch (error) {
    return console.log(error);
  }
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.payload.greeting,
      };
    default:
      return state;
  }
};

export default greetingReducer;
