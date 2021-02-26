const ASYNC_ACTION_START  = "ASYNC_ACTION_START";
const ASYNC_ACTION_FINISH = "ASYNC_ACTION_FINISH";
const ASYNC_ACTION_ERROR  = "ASYNC_ACTION_ERROR";
export const asyncActionStart=()=>{
    return{
        type:ASYNC_ACTION_START
    }
}

export const asyncActionFinish=()=>{
    return{
        type:ASYNC_ACTION_FINISH
    }
}

export const asyncActionError=()=>{
    return{
        type:ASYNC_ACTION_ERROR
    }
}

const initialState={
    loading:false,
    error:null
}

export default function asyncReducer(state=initialState, action){
    switch(action.type){
        case ASYNC_ACTION_START:
            return{
                ...state,
                loading:true,
                error:null
            }
        case ASYNC_ACTION_FINISH:
            return{
                ...state,
                loading:false
            }
        case ASYNC_ACTION_ERROR :
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}