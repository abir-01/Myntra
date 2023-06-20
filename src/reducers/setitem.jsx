const initialstate = {}

const setitem = (state = initialstate, action) => {
    switch (action.type) {
        case "SETITEM":
            state = action.item;
            // console.log("STATE = ",state)
            return state;
        
        default:
            return state;
    }
}

export default setitem;