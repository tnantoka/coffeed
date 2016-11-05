import { connect } from 'react-redux'
import { showPost } from '../actions'
import PostList from '../components/PostList'

const mapStateToProps = (state) => ({
  posts: state.posts
})

const mapDispatchToProps =  ({
  onPostClick: showPost
})

const VisiblePostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)

export default VisiblePostList
