import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../http/api";

const SearchResults = () => {
    const dispatch = useDispatch()
    const {search} = useParams()
    const navigate = useNavigate()
    console.log(navigate)



    //**********STATE**************///
    const [result , setResult] = useState([])
    const [searchInput, setSearchInput] = useState("")
    // const result = useSelector(state => state.search)

    ///***************REDUX__HOOKS*****************///

    const basket = useSelector(s => s.basket)
    const basketItems = basket.some(basket => basket.id === result.id)

    //**************HANDLE****************///

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    const handleSearch = () => {
        if (searchInput) {
            navigate(`/search-results/${searchInput}`)
        }
    }
    const keySearch = (e) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    //**************FILTER__SEARCH****************///


    const filteredResult = result.filter(prod => {
        return prod.name.toLowerCase().startsWith(searchInput.toLowerCase())

    })

    // function searchProducts(key, value) {
    //     let object = new URLSearchParams(window.location.search);
    //
    //     object.set(key, value);
    //     let newURL = `${window.location.pathname}?${object.toString()}`;
    //     navigate.push(newURL);
    //     dispatch(fetchPosts());
    // }
    //
    // // export const getCourses = () =>{
    // //     return(dispatch) =>{
    // //         axios(`https://djangorestapp.herokuapp.com/course-list/`)
    // //             .then(({data})=> dispatch({type:GET_COURSES, payload:data}))
    // //     }
    // // }

    useEffect(() => {
        api(`/prod-list?name=${search}`)
            .then(({data}) => {
                setResult(data)
            })
    }, [searchInput])

    return (
        <div className=" ">
            <div className="relative mt-1 inputHed">
                <div className="absolute  inset-y-0 left-0 flex items-center pl- pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                         viewBox="-4 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"></path>
                    </svg>
                </div>
                <input
                    type="text" id="table-search"
                    className="text-gray-800 mt-28 border-white-300 text-black-100 text-xl w-full rounded-xl focus:ring-blue-500 focus:border-blue-500 block   pl-10 p-2  dark:bg-white-700 dark:border-white-600 dark:placeholder:text-white-50 placeholder:outline-white-800 dark:text-black  " placeholder="Я ищу в Motion-Shop. . .    "
                    onChange={(e)=> handleChange(e)}
                    onKeyDown={(e) => keySearch(e)}
                />
                {/*<input*/}
                {/*    type="search"*/}
                {/*    placeholder="поиск"*/}
                {/*    className="navbar__search"*/}
                {/*    onChange={(e) => searchProducts("q", e.target.value)}*/}
                {/*/>*/}
            </div>
            <div className="SEARCH">
                {
                    filteredResult.map((el ,  index) => (
                        <div className=" searchDiv" key={index}>
                            <div style={{background: "#F8F8F8", margin: "0 5px"}} className="basket-card">
                                <Link to={`/details/${el.id}`}>
                                    <img src={el.img} alt="no image"/>


                                    <h1>{el.name}</h1>
                                    <h1 style={{fontSize: "24px", color: "#FF005C"}}>{el.price} ₺</h1>
                                </Link>
                                <button onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el.id})}
                                        style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}
                                        className="develop searchBtn">{
                                    basketItems ? "Добавлено" : "В карзину"
                                }</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default SearchResults;