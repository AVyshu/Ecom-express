import { useContext,createContext,useEffect,useState } from "react"
import axios from "axios"

const productContext=createContext()

function ProductContextAPI({children}){
const[products,setProducts]=useState([])
useEffect(()=>{
    fetchData()
},[])
const fetchData=async () =>{
    const response = await axios.get('https://dummyjson.com/products?limit=0')
    setProducts(response.data.products)
}
  return(
    <productContext.Provider value={{products,setProducts}}>
          {children}
    </productContext.Provider>
  )
}
export const useProduct=()=>{
    return useContext(productContext)
}
export default ProductContextAPI