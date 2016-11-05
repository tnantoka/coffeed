import React, { PropTypes } from 'react'
import { ListGroup/*, ListGroupItem*/ } from 'react-bootstrap'
import { Link } from 'react-router'

const PostList = ({ posts, onPostClick }) => (
  <ListGroup>
    {Object.keys(posts).map(id =>
      // <ListGroupItem key={id} onClick={() => onPostClick(id)}>
      //   {posts[id]}
      // </ListGroupItem>
      <Link key={id} to={`/posts/${id}`} className="list-group-item">{posts[id]}</Link>
    )}
  </ListGroup>
)

PostList.propTypes = {
  posts: React.PropTypes.objectOf(React.PropTypes.string).isRequired,
  onPostClick: PropTypes.func.isRequired
}

export default PostList
