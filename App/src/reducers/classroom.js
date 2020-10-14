const INITIAL_STATE = {
    classrooms: [],

    errorMessage: '',
    successMessage: '',

    _id: null,
    code: '',
    name: '',
    assignedGroup: '',
    normalSpaces: 0,
    accessableSpaces: 0,
    attributes: []
}

export const TYPE_CLASSROOM = 'TYPE_CLASSROOM'
export const TYPE_CLASSROOM_SET_LIST = TYPE_CLASSROOM + '_SET_LIST'

export const TYPE_CLASSROOM_SET_ERROR_MESSAGE = TYPE_CLASSROOM + '_SET_ERROR_MESSAGE'
export const TYPE_CLASSROOM_SET_SUCCESS_MESSAGE = TYPE_CLASSROOM + '_SET_SUCCESS_MESSAGE'
export const TYPE_CLASSROOM_SET_FORM = TYPE_CLASSROOM + '_SET_'
export const TYPE_CLASSROOM_LIMPAR = TYPE_CLASSROOM + '_LIMPAR'


export default function(state = INITIAL_STATE, acao){
    switch(acao.type){
        /*Lista*/
        case TYPE_CLASSROOM_SET_LIST :
            return {...state, classrooms: acao.value}

        case TYPE_CLASSROOM_SET_ERROR_MESSAGE :
            return {...state, errorMessage: acao.value, successMessage: ''}
        case TYPE_CLASSROOM_SET_SUCCESS_MESSAGE :
            return {...state, successMessage: acao.value, errorMessage: ''}

        /*Form*/
        case TYPE_CLASSROOM_SET_FORM+'CODIGO' : 
            return {...state, code: acao.value}
        case TYPE_CLASSROOM_SET_FORM+'NOME' : 
            return {...state, name: acao.value}
        case TYPE_CLASSROOM_SET_FORM+'TURMA' : 
            return {...state, assignedGroup: acao.value}
        case TYPE_CLASSROOM_SET_FORM+'LUGARES' : 
            return {...state, normalSpaces: acao.value}
        case TYPE_CLASSROOM_SET_FORM+'LUGARESACESSIVEIS' : 
            return {...state, accessableSpaces: acao.value}
        case TYPE_CLASSROOM_SET_FORM+'ATRIBUTOS' :
            return {...state, attributes: acao.value}
        
        case TYPE_CLASSROOM_LIMPAR :
            return {...INITIAL_STATE, classrooms : state.classrooms}
            
        default: return state
    }
}