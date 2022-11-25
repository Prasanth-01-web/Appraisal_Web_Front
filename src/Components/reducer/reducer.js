export const initialstate={
    authStatus :false
}

export const actionTypes={
    SET_AUTHSTATUS : 'SET_AUTHSTATUS'
}

const reducer = ( state = initialstate, action ) => {
    switch(action.type){
        case actionTypes.SET_AUTHSTATUS:
            {
                return {
                    ...state,
                    authStatus: action.authStatus,
                }
            }
    }
}

export default reducer;