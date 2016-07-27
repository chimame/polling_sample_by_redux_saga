import React from 'react'

const Time = (props) => {
  return(
    <div>
      <p>server time: {props.server_time}</p>
      <p>client time: {props.client_time}</p>
      <p>network state: {props.show_error ? 'error' : 'normal'}</p>
    </div>
  )
}

export default Time