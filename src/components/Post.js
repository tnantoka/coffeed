import React, { PropTypes } from 'react'
import MDReactComponent from 'markdown-react-js'

function handleIterate(Tag, props, children, level) {
  if (Tag === 'table') {
    props = {
      ...props,
      className: 'table table-bordered'
    }
  }

  return <Tag {...props}>{children}</Tag>
}

const Post = ({ source }) => (
  <MDReactComponent text={source} onIterate={handleIterate} />
)

Post.propTypes = {
  source: PropTypes.string.isRequired
}

export default Post
