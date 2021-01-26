import { INCREMENT, DECREMENT } from './table.types';
import { TableDispatchType, checkBox } from './table.types'


export function activateCheckBox(checkBox:checkBox) :TableDispatchType {

    return {

        type: 'checkBox',
        index: 3,
    
    };

};

export const decreaseCounter = () => {

    return {

       type: DECREMENT,

    };

};