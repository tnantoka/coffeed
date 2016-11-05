import React from 'react'
import { Nav, NavItem, Navbar, Grid, Row, Col } from 'react-bootstrap'
// import PostList from '../components/PostList'
import VisiblePostList from '../containers/VisiblePostList'
import Post from '../components/Post'
import { Link } from 'react-router'

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
            <Link to="/">Coffeed</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://github.com/tnantoka/coffeed">GitHub</NavItem>
        </Nav>
      </Navbar>
      <Grid>
        <Row>
          <Col sm={9} smPush={3}>
            <Post source={this.props.source} />
          </Col>
          <Col sm={this.props.source ? 3 : 12} smPull={this.props.source ? 9 : 0}>
            <VisiblePostList />
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
