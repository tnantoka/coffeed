import { connect } from 'react-redux'
import { showPost } from '../actions'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => ({
  source: state.post,
  postId: parseInt(ownProps.params.postId, 10)
})

const mapDispatchToProps =  ({
  showPost: showPost
})

const MainApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default MainApp
