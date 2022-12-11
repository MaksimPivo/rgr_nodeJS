const initialState = {auth: false};

export default function entering(state = initialState, action){
    switch (action.type){
        case "logIn":
            return {...state, auth: true};
        case "logOut":
            return {...state, auth: false};
        default:
            return state;
    }
}