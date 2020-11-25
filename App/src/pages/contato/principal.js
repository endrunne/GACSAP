    import React from 'react'

    import { Cabecalho } from '../../componentes/cabecalho'
    import { Contato } from '../../componentes/contato/contato'

    export const ContatoPage = props => {
        return (
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo="Fale conosco!"/>
                <Contato nomeInteiro="Leandro Glowatski" linkedin="https://www.linkedin.com/in/leandro-glowatzki-94b04a120/" email="leandroglowatzki@gmail.com"></Contato>
                <Contato nomeInteiro="Lucas Yuichi Shimoda" linkedin="https://www.linkedin.com/in/lucas-s-34086a11a/" email="lshimoda.dev@gmail.com"></Contato>
                <Contato nomeInteiro="Vitor Oliveira" linkedin="https://www.linkedin.com/in/vltoroliveira/" email="endrunne@pm.me"></Contato>
                <Contato nomeInteiro="Vinícius Queiroz Costa" linkedin="https://www.linkedin.com/in/vinicius-queiroz-costa/" email="viniciusqueirozcosta@outlook.com"></Contato>
            </div>
        )
    }