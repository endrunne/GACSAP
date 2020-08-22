import axios from 'axios'
import {
    TYPE_CLASSROOM_SET_LIST,
    TYPE_CLASSROOM_SET_ERROR_MESSAGE,
    TYPE_CLASSROOM_SET_SUCCESS_MESSAGE,
    TYPE_CLASSROOM_SET_FORM
} from '../reducers/classroom'

const URL = 'http://localhost:3000/api/posts'

export const getClassroomList = () => {
    return async dispatch => {
        try {
            const result = await axios.get(URL)
            if (result.data) {
                return dispatch({
                    type: TYPE_CLASSROOM_SET_LIST,
                    value: result.data
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const setErrorMessage = msg => ({
    type: TYPE_CLASSROOM_SET_ERROR_MESSAGE,
    value: msg
})

export const setSuccessMessage = msg => ({
    type: TYPE_CLASSROOM_SET_SUCCESS_MESSAGE,
    value: msg
})

export const setInputForms = evento => {
    const type = (TYPE_CLASSROOM_SET_FORM + evento.target.id).toUpperCase()

    return {
        type,
        value: evento.target.value
    }
}

export const deleteClassroom = _id => {
    return async dispatch => {
        if (window.confirm('Deseja realmente excluir a sala selecionada?')) {
            try {
                await axios.delete(URL + '/' + _id)
                dispatch(getClassroomList())
                dispatch(setSuccessMessage('Sala deletada com sucesso'))
            } catch (e) {
                console.log(e)
                dispatch(setErrorMessage('Erro ao deletar a sala'))
            }
        }
    }
}

export const saveClassroom = (evento) => {
    return async dispatch => {
        try{
            if(evento){
                evento.preventDefault()
            }

            if(false){
                dispatch(setErrorMessage("Favor preencher todos os campos"))
                return
            }

            const body = {

            }

            await axios.post(URL, body)
            
            return dispatch(setSuccessMessage(`Sala cadastrada com sucesso!`))
        }catch(e){
            console.log(e)
            dispatch(setErrorMessage('Erro ao cadastrar a sala!'))
        }
    }
}