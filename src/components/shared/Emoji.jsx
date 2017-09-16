import React from 'react'

const Emoji = props => (
  <span role={'img'} aria-label={props.label}>{props.hex}</span>
)

export default Emoji
