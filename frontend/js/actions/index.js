import { createAction } from 'redux-actions'
export const START_POLLING = 'START_POLLING'
export const SHOW_CURRENT_TIME = 'SHOW_CURRENT_TIME'
export const SHOW_NETWORK_ERROR = 'SHOW_NETWORK_ERROR'

export const startPolling = createAction(START_POLLING)
export const showCurrentTime = createAction(SHOW_CURRENT_TIME)
export const showNetworkError = createAction(SHOW_NETWORK_ERROR)
