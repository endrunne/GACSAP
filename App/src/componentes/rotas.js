import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { ClassroomPage } from '../pages/classroom/principal'
import { GroupPage } from '../pages/group/principal'
import { ClassroomGroupAssignmentPage } from '../pages/classroomGroupAssignment/principal'
import { HomePage } from '../pages/home/principal'

export const Rotas = props => {
    return (
        <Switch>
            <Route path="/classroom" component={ClassroomPage}/>
            <Route path="/group" component={GroupPage}/>
            <Route path="/classroomGroupAssignment" component={ClassroomGroupAssignmentPage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/" component={HomePage}/>
            <Route path="*" component={HomePage}/>
        </Switch>
    )
}
