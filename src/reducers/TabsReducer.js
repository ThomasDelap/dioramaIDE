import {ADD_MODULE, REMOVE_MODULE} from "../actions/TabsAction";

var initState = {
    active: 0,
    all: []
};

export default function(state = initState, action){
    let newState = Object.assign({}, state);

    switch(action.type){

        case "TAB_CREATED":

            var index = newState.all.indexOf(action.data);
            if(index != -1){

                newState.active = index;
                return newState;
            }

            newState.all.push(action.data);
            return newState;
        break;

        case "TAB_REMOVED":

            newState.all.splice(state.all.indexOf(action.data), 1);
            return newState;
        break;

        case "TAB_SWAP":

            newState.all = newState.all.splice(b, 1, newState.all.splice(a, 1, newState.all[b])[0]);
            return newState;
        break;

        case "TAB_ACTIVE":

            if(newState.active == action.data) return newState;

            newState.active = action.data;
            return newState;
        break;

        case "TAB_FETCH":

            return newState.all;
        break;

        default:
            return state;
    }
}
