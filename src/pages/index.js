import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  /* marginBottom: rhythm(1 / 4), */
                }}
              >
              <p style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </p> 
              </h3>
              <small>{node.frontmatter.date}</small>
              {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
              <p>My name is Bailey Dalton. I love to ski, run and mountain bike.</p>
              <p>I have a little JavaScript experience. Mostly just the few classes I've taken.</p>
              <p>My favorite part of web development is designing websites.</p>
              <p>I'm hoping to learn a lot, but mostly improve my JavaScript skills.</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
