import { ADD_PRODUCT, REMOVE} from "./cartAction";

const initState = [
    {
        id: 0,
        name: "Los Angeles Lakers City Edition Captain Snapback Cap - Purple - Purple",
        seller: "47 Brand",
        price: {
            value: 34.99,
            unit: "USD"
        },
        photo: "/img/hat.png",
        quantity: 0,
        inCart: false,
        // description: "",
    },
    {
        id: 1,
        name: "Los Angeles Lakers Youth City Edition Anthony Davis Player Tee - Gold",
        seller: "Outerstuff",
        price: {
            value: 34.99,
            unit: "USD"
        },
        photo: "/img/AD.png",
        quantity: 0,
        inCart: false,
        // description: "",
    },
    {
        id: 2,
        name: "Los Angeles Lakers Youth City Edition LeBron James Player Tee - Gold",
        seller: "Outerstuff",
        price: {
            value: 33.99,
            unit: "USD"
        },
        photo: "/img/LBJ.png",
        quantity: 0,
        inCart: false,
        // description: "",
    },
    {
        id: 3,
        name: "Los Angeles Lakers City Edition Headline Hoodie - Black",
        seller: "Outerstuff",
        price: {
            value: 64.99,
            unit: "USD"
        },
        photo: "/img/hoodie.png",
        quantity: 0,
        inCart: false,
        // description: "",
    },
    {
        id: 4,
        name: "Los Angeles Lakers 90's Kente Knee Patch Pant - Black",
        seller: "Two Hype",
        price: {
            value: 84.99,
            unit: "USD"
        },
        photo: "/img/pant.png",
        quantity: 0,
        inCart: false,
        // description: "",
    },
]

export const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            const temp = state.map((element,index) => {
                if (element.id === action.payload.id){
                    return {
                        ...element,
                        inCart: true,
                    }
                }
                return element;
            })
            return temp;
        }
        case REMOVE: {
            const temp = state.map((element) => {
                if ( element.id === action.payload ){
                    return {
                        ...element,
                        quantity: 0,
                        inCart: false,
                    }
                }
                return element;
            });
            return temp;
        }
        default: return state;
    }
}