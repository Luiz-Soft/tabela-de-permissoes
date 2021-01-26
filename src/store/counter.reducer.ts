import {INCREMENT, DECREMENT} from './table.types'
import {}
const INITIAL_STATE={
    count: 0,
}



const reducer = (state= INITIAL_STATE, action: checkBox)=>{
    


    switch (action.type){
        case 'ACTIVATE_CHECKBOX':
            return{
                ...state,count: state.count+1,
            };

            case DECREMENT:

            return{
                ...state,count:state.count-1,
            };

            default:return state;
    }
};

export default reducer;