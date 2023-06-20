export const setitem = (item) => {
    return {
        type: "SETITEM",
        item
    }
        
}

export const additem = (item,size) => {

    // console.log("Action = ", item);

    return {
        type: "ADDITEM",
        item,
        size
    }
}
export const removeitem = (index) => {

    // console.log("Action = ", index);

    return {
        type: "REMOVEITEM",
        index,
        // items
    }
}