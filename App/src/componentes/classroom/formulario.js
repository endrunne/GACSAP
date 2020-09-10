import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Multiselect } from 'multiselect-react-dropdown'/*utilizar depois, no lugar de sala acessivel, trocar por atributos da sala*/

import {
    setInputForms,
    saveClassroom
} from '../../actions/classroom'

var styles = {
    divInputGroup : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    divInputCenter : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}

const ClassroomForm = props => {

    const {
        _id,
        codigo,
        lugares,
        lugaresAcessiveis,
        isSalaAcessivel,

        isAlteracao,
    
        setInputForms,
        limpar,
        salvarCurso} = props

    return (
        <div className="border-right pl-3 pr-3">
            <h3 className="border-bottom">Formulário</h3>
            <form>
                <div className="form-group row" style={styles.divInputGroup}>
                    <label htmlFor="codigo"
                        className="col-sm-3 col-form-label">
                        Código:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="codigo"
                            value={codigo}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="lugares"
                        className="col-sm-3 col-form-label">
                        Lugares:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="lugares"
                            value={lugares}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="lugaresAcessiveis"
                        className="col-sm-3 col-form-label">
                        Lugares Acessiveis:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="lugaresAcessiveis"
                            value={lugaresAcessiveis}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="salaAcessivel"
                        className="col-sm-3 col-form-label">
                        A Sala é acessível?
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="checkbox"
                            className="form-control" id="salaAcessivel"
                            checked={isSalaAcessivel}
                            onChange={setInputForms} />
                    </div>  
                </div>

                <div className="form-group row">
                    <button className="btn btn-primary ml-3 mb-3"
                        onClick={e => saveClassroom(e, _id, )}>
                        {isAlteracao ? "Atualizar" : "Adicionar"}
                    </button>
                </div>
            </form>
        </div>
    )
}

const mapStoreToProps = store => ({
    codigo: store.classroom.codigo,
    lugares: store.classroom.lugares,
    lugaresAcessiveis: store.classroom.lugaresAcessiveis,
    isSalaAcessivel: store.classroom.isSalaAcessivel
})

const mapActionToProps = dispatch => bindActionCreators({
    setInputForms,
    saveClassroom
}, dispatch)

const conectado = connect(mapStoreToProps, mapActionToProps)(ClassroomForm)
export {conectado as ClassroomForm}