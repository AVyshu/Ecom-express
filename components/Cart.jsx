
import React,{useState} from 'react'
import { useCart } from '../context/CartContext'
import "../css/Cart.css"
function Cart() {
  const{cartItem,setCartItems}=useCart()
  const[quantity,setQuantity]=useState(1)
  const handelIncrement=(()=>{
    if(quantity <10){
      setQuantity(prevcount => prevcount +1)
    }
     
  })
  const handelDecrement=(()=>{
    if(quantity >1){
    setQuantity(prevcount => prevcount -1)
    }
 })

 
  const removeItem = (item)=>{
    setCartItems((prev)=>{
      const newCart=prev.filter(element=>element.id!== item.id)
      return newCart
    })
  }
  return (
   <>
     <section className='cart'>
      {
        cartItem.length ===0 && <h1 className='empty'>Cart is Empty</h1>
      }
      {
        cartItem.map(Item=>{
          return<div className='Item'>
          <img src={Item.images[0]} alt={Item.title} />
           <h5>{Item.title}</h5>
            <div>
              <button onClick={()=>handelIncrement(quantity)}>+</button>
              <b>{Item.count}</b>
              <b>{quantity}</b>
              <button onClick={()=>handelDecrement(quantity)}>-</button>
            </div>
            <h3 className='child'>{Item.price * Item.count}$</h3>
            <button className='remove-btn'
            onClick={()=>removeItem(Item)}>remove</button>
          </div>
        })
      }
      
      </section> 
   </>
  )
}

export default Cart
