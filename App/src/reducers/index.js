import {combineReducers}  from 'redux'

import classroomReducer from './classroom'

const reducers = combineReducers({
    classroom: classroomReducer
})

export default reducers