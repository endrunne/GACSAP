import React from 'react'
import { Cabecalho } from '../../componentes/cabecalho'
import { ClassroomCRUD } from '../../componentes/classroom/crud'

export const ClassroomPage = props => {

    return (
        <div className='container'>
            <Cabecalho titulo="Salas de aula" subtitulo="Cadastro de salas de aula"/>
            <ClassroomCRUD/>
        </div>
    )
}
