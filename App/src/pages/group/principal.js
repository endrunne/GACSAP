import React from 'react'
import { Cabecalho } from '../../componentes/cabecalho'
import { GroupCRUD } from '../../componentes/group/crud'

export const GroupPage = props => {

    return (
        <div className='container'>
            <Cabecalho titulo="Turmas" subtitulo="Cadastro de Turmas"/>
            <GroupCRUD/>
        </div>
    )
}
