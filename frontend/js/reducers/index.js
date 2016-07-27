import { handleActions } from 'redux-actions'

const initialState = {show_error: false, server_time: '', clinet_time: ''}

const reducerMap = {
  SHOW_CURRENT_TIME(state, action) {
    const today = new Date()
    return {
      show_error: false,
      server_time: action.payload.server_time,
      client_time: `${today.getFullYear()}/${('0' + (today.getMonth() + 1)).slice(-2)}/${('0' + today.getDate()).slice(-2)} ${('0' + today.getHours()).slice(-2)}:${('0' + today.getMinutes()).slice(-2)}:${('0' + today.getSeconds()).slice(-2)}`
    }
  },
  SHOW_NETWORK_ERROR(state, action) {
    return {...state, show_error: true}
  },
}

export default handleActions(reducerMap, initialState)
