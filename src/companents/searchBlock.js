// import React, {useEffect, useState} from 'react';
// import {Link, useNavigate, useParams} from "react-router-dom";
// import axios from "axios";
// import {useDispatch} from "react-redux";
//
// const SearchBlock = () => {
//     const [query , setQuery] = useState([])
//     const [value , setValue] = useState("")
//     const navigate = useNavigate()
//     const {block} = useParams()
//     const handleSearch = () =>{
//         if (query) {
//             navigate(`/searchBlock/${block}`)
//         }
//     }
//
//     const dispatch = useDispatch()
//     const keySearch = (e) =>{
//         if (e.key === "Enter"){
//             handleSearch()
//         }
//     }
//
//     const getQuery = () =>{
//         axios.get(`/prod-list?name=${query}`)
//             .then(({data})=> {
//                     setQuery(data)
//                 })
//     }
//
//     useEffect(()=>{
//         getQuery()
//     },[])
//
//     // const filteredValue = query.filter(prod => {
//     //     return prod.name.toLowerCase().includes(value.toLowerCase())
//     // })
//     // console.log(filteredValue, "FILTERVALUE")
//
//     return (
//         <div>
//             <input type="text" placeholder="search..." className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//             onChange={(e)=> setValue(e.target.value)}
//                    onClick={(event)=>keySearch(event)}
//             />
//
//             <div>{
//                     query.map(el => (
//                         <div className=" searchDiv">
//                             <div style={{background: "#F8F8F8", margin: "0 5px"}} className="basket-card">
//                                 <Link to={`/details/${el.id}`}>
//                                     <img src={el.img} alt="no image"/>
//
//
//                                     <h1>{el.name}</h1>
//                                     <h1 style={{fontSize: "24px", color: "#FF005C"}}>{el.price} ₺</h1>
//                                 </Link>
//                                 <button onClick={() => dispatch({type: "ADD_TO_BASKET", payload:el.id})}
//                                         style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}
//                                         className="develop searchBtn">{
//                                     "В карзину"
//                                 }</button>
//                             </div>
//                         </div>
//                     ))
//                 }</div>
//         </div>
//     );
// };
//
// export default SearchBlock;