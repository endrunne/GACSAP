import React from 'react'
import { Cabecalho } from '../../componentes/cabecalho'

import { Atribuir } from '../../componentes/classroom/atribuir'

export const ClassroomGroupAssignmentPage = props => {

    return (
        <div className='container'>
            <Cabecalho titulo="Atribuição de Turmas" subtitulo=""/>
            <Atribuir/>
        </div>
    )
}
