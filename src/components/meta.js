import React from 'react'
import styled from '@emotion/styled'

const PostMeta = styled('section')`
  margin: 1.4rem 0;
  font-size: 80%;
  font-style: italic;
`

const PostMetaLink = styled('a')`
  background: none;
  text-decoration: underline;

  &:hover {
    background: none;
    text-decoration: underline;
  }
`

const PostMetaSeparator = styled('span')`
  margin-left: 4px;
  margin-right: 4px;
`

const Meta = ({ editLink, postDate }) => {
  // Format date as "3 Aug, 2025"
  const formattedDate = new Date(postDate)
    .toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
    .replace(/ (\w+) (\d{4})$/, ' $1, $2')

  return (
    <PostMeta>
      Spread the word on{' '}
      <PostMetaLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://bsky.app/profile/plekhanov.me"
      >
        Bluesky
      </PostMetaLink>
      <PostMetaSeparator>{` • `}</PostMetaSeparator>
      <PostMetaLink target="_blank" rel="noopener noreferrer" href={editLink}>
        Edit on Github
      </PostMetaLink>
      <PostMetaSeparator>{` • `}</PostMetaSeparator>
      <span>Published on {formattedDate}</span>
    </PostMeta>
  )
}

export default Meta
