import React from 'react'
import { Nav, NavItem, Navbar, Grid, Row, Col } from 'react-bootstrap'
// import PostList from '../components/PostList'
import VisiblePostList from '../containers/VisiblePostList'
import Post from '../components/Post'

class App extends React.Component {
  constructor(props) {
    super(props)
    if (props.postId) {
      this.props.showPost(props.postId)
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.postId && this.props.postId !== nextProps.postId) {
      this.props.showPost(nextProps.postId)
    }
  }
  showPost() {
  }
  render = () => (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Coffeed</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://github.com/tnantoka/coffeed">GitHub</NavItem>
        </Nav>
      </Navbar>
      <Grid>
        <Row>
          <Col sm={3}>
            <VisiblePostList />
          </Col>
          <Col sm={9}>
            <Post source={this.props.source} />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

App.propTypes = {
  source: React.PropTypes.string,
  postId: React.PropTypes.number.isRequired
}

export default App
