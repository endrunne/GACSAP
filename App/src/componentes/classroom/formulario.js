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
        code,
        name,
        normalSpaces,
        AccessibleSpaces,

        isAlteracao,
    
        setInputForms,
        limpar,
        salvarCurso} = props

    return (
        <div className="border-right pl-3 pr-3">
            <h3 className="border-bottom">Formulário</h3>
            <form>
                <div className="form-group row" style={styles.divInputGroup}>
                    <label htmlFor="code"
                        className="col-sm-3 col-form-label">
                        Código:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="code"
                            value={code}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="normalSpaces"
                        className="col-sm-3 col-form-label">
                        Lugares:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="normalSpaces"
                            value={normalSpaces}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="AccessibleSpaces"
                        className="col-sm-3 col-form-label">
                        Lugares Acessiveis:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="AccessibleSpaces"
                            value={AccessibleSpaces}
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
    code: store.classroom.code,
    normalSpaces: store.classroom.normalSpaces,
    AccessibleSpaces: store.classroom.AccessibleSpaces,
    isSalaAcessivel: store.classroom.isSalaAcessivel
})

const mapActionToProps = dispatch => bindActionCreators({
    setInputForms,
    saveClassroom
}, dispatch)

const conectado = connect(mapStoreToProps, mapActionToProps)(ClassroomForm)
export {conectado as ClassroomForm}