import React,{createContext, useContext, useState} from 'react'

const cartContext=createContext()
function CartContextAPI({children}) {
    const[cartItem,setCartItems]=useState([])
  return (
   <>
     <cartContext.Provider value={{cartItem,setCartItems}}>
        {children}
     </cartContext.Provider>
   </>
  )
}
 
export const useCart = () => useContext(cartContext)

export default CartContextAPI