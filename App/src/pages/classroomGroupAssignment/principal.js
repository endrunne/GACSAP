import React from 'react'
import { Cabecalho } from '../../componentes/cabecalho'
import { BotaoAtribuir } from '../../componentes/classroom/botaoAtribuirTurmas'
import { ClassroomList } from '../../componentes/classroom/lista.js'

export const ClassroomGroupAssignmentPage = props => {

    return (
        <div className='container'>
            <Cabecalho titulo="Atribuição de Turmas" subtitulo=""/>
            <BotaoAtribuir/>
            <ClassroomList isAdmin={false} isAssignment={true}/>
        </div>
    )
}
