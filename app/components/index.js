import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import reducers from '../reducers/index'
import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail'

const logger = createLogger({});
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('app')
)