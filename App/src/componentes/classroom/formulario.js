import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Multiselect } from 'multiselect-react-dropdown'

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

        isAlteracao,
    
        setInputForms,
        limpar,
        salvarCurso} = props

    return (
        <div className="border-right pl-3 pr-3">
            <h3 className="border-bottom">Formulário</h3>
            <form>
                <div className="form-group row" style={styles.divInputGroup}>
                    <label htmlFor="inpCodigo"
                        className="col-sm-3 col-form-label">
                        Código:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="inpCodigo"
                            value={null}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inpLugares"
                        className="col-sm-3 col-form-label">
                        Lugares:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="inpLugares"
                            value={null}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inpLugaresAcessiveis"
                        className="col-sm-3 col-form-label">
                        Lugares Acessiveis:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="inpLugaresAcessiveis"
                            value={null}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inpLugaresAcessiveis"
                        className="col-sm-3 col-form-label">
                        Sala acessível?
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="inpLugaresAcessiveis"
                            value={null}
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
    //codigo: store.curso.codigo
})

const mapActionToProps = dispatch => bindActionCreators({
    setInputForms,
    saveClassroom
}, dispatch)

const conectado = connect(mapStoreToProps, mapActionToProps)(ClassroomForm)
export {conectado as ClassroomForm}