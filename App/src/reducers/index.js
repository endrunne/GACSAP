import {combineReducers}  from 'redux'

import classroomReducer from './classroom'
import groupReducer from './group'

const reducers = combineReducers({
    classroom: classroomReducer,
    group: groupReducer
})

export default reducers