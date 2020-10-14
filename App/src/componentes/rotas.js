import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { ClassroomPage } from '../pages/classroom/principal'
import { HomePage } from '../pages/home/principal'

export const Rotas = props => {
    return (
        <Switch>
            <Route path="/classroom" component={ClassroomPage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/" component={HomePage}/>
            <Route path="*" component={HomePage}/>
        </Switch>
    )
}