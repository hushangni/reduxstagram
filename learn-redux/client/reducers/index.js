import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// gonna take our reducers and make them into 1
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;