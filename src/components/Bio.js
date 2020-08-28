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
          alignItems: 'center',
          marginBottom: rhythm(2.5), 
        }}
      >
        <img
          src={profilePic}
          alt={`Bailey Dalton`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(4),
            height: rhythm(4),
            borderRadius: 62,
          }}
        />
        <div>
          By Bailey Dalton
        </div>
      </div>
    )
  }
}

export default Bio
