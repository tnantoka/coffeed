import { CALL_API } from 'redux-api-middleware'

export const showPost = (id) => ({
  [CALL_API]: {
    endpoint: process.env.PUBLIC_URL + '/posts/' + id + '.md',
    method: 'GET',
    types: [
      'REQUEST',
      {
        type: 'SUCCESS',
        payload: (action, state, res) => res.text().then(payload => payload)
      },
      'FAILURE'
    ]
  }
})
