import {GET_SHOP, SEARCH_RESULT} from "./type";
import {api} from "../http/api";
import {useDispatch} from "react-redux";
import axios from "axios";
const dispatch = useDispatch()


export const getProductList = () =>{
    return(dispatch) => {
        axios(`https://api.tez-shop.com.kg/prod-list`)
            .then(({data})=>{dispatch({type:SEARCH_RESULT , payload: data})})
    }
}