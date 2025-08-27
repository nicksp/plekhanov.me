import React from 'react'
import { css } from '@emotion/core'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Nav from './nav'

const Header = ({ location }) => {
  const { site } = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const { title, menuLinks } = site.siteMetadata
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <header
      css={css`
        padding: 30px 0px 0px;
      `}
    >
      <Nav menuLinks={menuLinks}>
        {location.pathname !== rootPath ? (
          <h3
            css={css`
              margin: 0;
              line-height: 1;
              display: flex;
              align-items: center;
            `}
          >
            <Link
              css={css`
                box-shadow: none;
                text-decoration: none;
                color: #222;
                background: none !important;
                padding-bottom: 0 !important;
                font-weight: 800;
                letter-spacing: -1px;
                font-size: 1.8rem;
                position: relative;
                transition: color 0.2s ease;
                line-height: 1.1;
                display: block;
                text-align: center;

                &:hover {
                  color: var(--pastel-purple);
                }
              `}
              to="/"
            >
              {title}
            </Link>
          </h3>
        ) : (
          <div
            css={css`
              height: 1.8rem;
            `}
          />
        )}
      </Nav>
    </header>
  )
}

export default Header
