import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: center,
          /*marginBottom: rhythm(2.5), */
        }}
      >
        <img
          src={profilePic}
          alt={`Bailey Dalton`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
            borderRadius: 43,
          }}
        />
        <p>
          By Bailey Dalton.{' '}
        </p>
      </div>
    )
  }
}

export default Bio
