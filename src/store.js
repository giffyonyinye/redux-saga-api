import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer  from './rootReducer';
import {rootSaga} from "./rootSaga";

const configStore = (preloadedState) => {
    const sagaMiddleware = createSagaMiddleware();
    const allMiddleware = applyMiddleware(sagaMiddleware);
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancer(allMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store
} 

export default configStore;
