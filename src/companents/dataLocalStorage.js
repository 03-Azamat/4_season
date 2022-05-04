import cookies from "js-cookie";



// export  const isAuth = () => {
//     const checkToken = cookies.get("access")
//     if (checkToken){
//         if (localStorage.getItem("access")){
//             return JSON.parse(localStorage.getItem("access"))
//         } else {
//             return false
//         }
//     }
// }

// export const logout = () => {
//     cookies.remove("access")
//     localStorage.removeItem("access")
// }
// export const dataId = (response) => {
//     localStorage.setItem("dataID", JSON.stringify(response.data.id))
// }
//
// export const imgId = (response) => {
//     localStorage.setItem("imgId", JSON.stringify(response.data.id))
// }