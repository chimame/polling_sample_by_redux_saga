import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import rootSaga from '../sagas'

export default (initialState) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(
      sagaMiddleware
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}
