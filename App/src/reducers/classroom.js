const INITIAL_STATE = {
    classrooms: [],
    errorMessage: '',
    successMessage: '',
    _id: null,

}

export const TYPE_CLASSROOM = 'TYPE_CLASSROOM'
export const TYPE_CLASSROOM_SET_LIST = TYPE_CLASSROOM + '_SET_LIST'
export const TYPE_CLASSROOM_SET_ERROR_MESSAGE = TYPE_CLASSROOM + '_SET_ERROR_MESSAGE'
export const TYPE_CLASSROOM_SET_SUCCESS_MESSAGE = TYPE_CLASSROOM + '_SET_SUCCESS_MESSAGE'
export const TYPE_CLASSROOM_SET_FORM = TYPE_CLASSROOM + '_SET_' 


export default function(state = INITIAL_STATE, acao){
    switch(acao.type){
        case TYPE_CLASSROOM_SET_LIST :
            return {...state, classrooms: acao.value}

        case TYPE_CLASSROOM_SET_ERROR_MESSAGE :
            return {...state, errorMessage: acao.value, successMessage: ''}

        case TYPE_CLASSROOM_SET_SUCCESS_MESSAGE :
            return {...state, successMessage: acao.value, errorMessage: ''}
        
        case TYPE_CLASSROOM_SET_SUCCESS_MESSAGE :
            return {...state, successMessage: acao.value, errorMessage: ''}

        /*mudar aqui os inputs do form após*/
        case TYPE_CLASSROOM_SET_FORM+'?' : return {...state, codigo: acao.value}
            return
            
        default: return state
    }
}