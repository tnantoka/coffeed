import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import list from './posts.json'

const posts = (state, action) => (
  list
)

const post = (state, action) => {
  return action.type === 'SUCCESS' ? action.payload : ''
}

const rootReducer = combineReducers({
  posts,
  post,
  routing: routerReducer
})

export default rootReducer
