import React, { useEffect, useReducer, useState } from 'react'
import { useProduct } from '../context/ProductContext'
import "../css/Product.css"
import { useCart } from '../context/CartContext'
import productReducer from '../reducer/ProductReducer'
function Product() {
  const {products}=useProduct()
   const {cartItem,setCartItems}=useCart()
   const[searchText,setSearchText]=useState("")
   const[filterValue,setFilterValue]=useState("")
   const [filterCategories,setFilterCategories]=useState([])
   const[sortValue,setSortValue]=useState("")
   const[filterProduct,dispatch]=useReducer(productReducer,[])
  
   useEffect(()=>{
    dispatch({type: "addProduct", payload :products})
     let categories = products.map(product => product.category)
      setFilterCategories(categories.reduce((acc,ele)=>{
        if(!acc.includes(ele)){
          acc.push(ele)
        }
        return acc
      },[]))
   },[products])

   useEffect(()=>{
    let timer=setTimeout(()=>{
      if(searchText){
        dispatch({
          type: "search",payload:{
            products:products,
            searchText:searchText.toLowerCase()}
        })
      }else{
        dispatch({type:"addproduct",payload:products})
      }
    },1000)
    return ()=>{
      clearTimeout(timer)
    }
   },[searchText])
   useEffect(()=>{
    if(filterValue){
      dispatch({
        type:"filter",payload:{
          filterValue,products
        }
      })
    }
   },[filterValue])
   useEffect(()=>{
    if(sortValue){
      dispatch({type:sortValue, payload:filterProduct})
    }
   },[sortValue])
   function addToCartHandeler(Items){
      //console.log(Items);
      const isItemAvailable =cartItem.find((products)=>products.id == Items.id)
      if(isItemAvailable){
        const newCartItem=cartItem.map((products)=>{
          if(products.id== Items.id){
            products.count=products.count+1
          }
          return products
        })
        setCartItems(newCartItem)
      }
     else{
      const newItem={...Items,count:1}
      setCartItems([...cartItem,newItem])
     }
   }
   
  return (
    <>
        <main className='product-page'>
          <aside className='product-aside'>
            <div className='search'>
              <label htmlFor="search">Search</label>
              <input type="search" name="search" id="search"
              onChange={(e)=> setSearchText(e.target.value)} value={searchText}/>
            </div>
            <div className='filter'>
              <h1>Filter Products</h1>
              <select name="filter" id="filter"
              onChange={(event)=>setFilterValue(event.target.value)}>
                <option value="">Filter.......</option>
                {
                  filterCategories.map(category=>{
                    return(
                      <option value={category} key={category}>{category}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className='sort'>
              <h1>sort</h1>
              <select name="sort" id="sort" onChange={(e)=>setSortValue(e.target.value)}>
                <option value=" ">Select....</option>
               <option value="a-z">A-Z</option> 
               <option value="z-a">Z-A</option> 
               <option value="h-l">high to low</option> 
               <option value="l-h">low to high</option> 
              </select>
            </div>
          </aside>
        </main>
        <section className='products'>
          {
            filterProduct.map(product=>{
              return <div className='card' key={product.id * Math.random()}>
                <img src={product.images[0]} alt="product"/>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
                <h3>{product.brand}</h3>
                <div className='buttons'>
                  <button>Buy Now</button>
                  <button onClick={()=>addToCartHandeler(product)}>Add To Cart</button>

                </div>
              </div>
            })
          }

        </section>
    </>
  )
}

export default Product
