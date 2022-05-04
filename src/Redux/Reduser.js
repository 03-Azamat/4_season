import {GET_SHOP, SEARCH_RESULT} from "./type";

export const initialState = {
    catalog: [],
    basket: [],
    favorite: [],
    shopList:[],
    search:[]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "UPLOAD_CATALOG":
            return {...state, catalog: action.payload}
        case "UPLOAD_NAVI":
            return {...state, catalog: action.payload}


        case "ADD_TO_BASKET":
            const foundProduct = state.basket.find(el => el.id === action.payload.id)

            if (foundProduct) {
                return {
                    ...state, basket: state.basket.map(el => {
                        if (el.id === action.payload.id) {
                            return {...el, quantity: el.quantity + 1}
                        }
                        return el
                    })
                }
            }
            return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
        case "REMOVE_REM":
            if (state.basket[action.payload].quantity > 1) {
                return {
                    ...state, basket: state.basket.map((el, idx) => {
                        if (idx === action.payload) {
                            return {...el, quantity: el.quantity - 1}
                        }
                        return el
                    })
                }
            }


        case "REMOVE_BASKET":
            return {...state, basket: state.basket.filter(el => el.id !== action.payload)}



        case "ADD_TO_FAVORITE":

            const favoriteProduct = state.favorite.find(el => el.id === action.payload.id)
            if (favoriteProduct) {

                return {
                    ...state, favorite: [...state.favorite]
                }
            }
            return {...state, favorite: [...state.favorite, action.payload]}


        case "REMOVE_BASKETS":
            return {...state, favorite: state.favorite.filter(el => el.id !== action.payload)}


        case SEARCH_RESULT:
            return {...state, search: action.payload}

        default:
            return state
    }
}