import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: '',
  post: {}
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {...state, loading: false, post: action.payload, error: '' }
    case 'FETCH_ERROR':
      return {...state, loading: false, error: action.payload }
    default:
      return state
  }
}

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
     .then(responce => {
      dispatch({type: 'FETCH_SUCCESS', payload: responce.data})
     })
     .catch(error => {
      dispatch({type: 'FETCH_ERROR'})
     })
  }, []) 

  return (
    <div>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingTwo
