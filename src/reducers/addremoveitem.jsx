const initialstate = []

const addremoveitem = (state = initialstate, action) => {
    switch (action.type) {
        case "ADDITEM":
            let items = state;
            let item = action.item;
            // console.log("item = ",action.item)
            item.size = action.size;
            items.push(item)
            state = items;
            // console.log("STATE = ", state)
            return state;
        case "REMOVEITEM":
            let items1 = [...state];

            items1.splice(action.index, 1)
            state = items1;
            // console.log("STATE = ", state)
            return state;

        default:
            return state;
    }
}

export default addremoveitem;