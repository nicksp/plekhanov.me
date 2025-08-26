import React, { Component } from 'react'

import { rhythm } from '../utils/typography'

class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(1),
        }}
      >
        <a
          href="https://github.com/nicksp"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.linkedin.com/in/nickplekhanov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>{' '}
        &bull;{' '}
        <a
          href="https://bsky.app/profile/plekhanov.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          bluesky
        </a>
        {''}
      </footer>
    )
  }
}

export default Footer
