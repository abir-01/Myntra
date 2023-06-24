const initialstate = [{}]

const addremoveitem = (state = initialstate, action) => {
    switch (action.type) {
        case "ADDITEM":
            let items = [...state];
            console.log(action.item);
            let item2 = {
                "name": action.item.name,
                "desc" : action.item.desc,
                "off": action.item.off,
                "originalprice" : action.item.originalprice,
                "poster": action.item.poster,
                "price" : action.item.price,
                "ratings" : action.item.ratings,
                "rating": action.item.rating,
                "size" : action.item.size,

            };
           
            console.log("item2 = ",item2)
           
            items.push(item2);
            console.log(item2, items);
            state = items;
            
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