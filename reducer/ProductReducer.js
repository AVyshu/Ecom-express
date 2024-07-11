


function productReducer(state,action){
    switch(action.type) {
        case"addProduct":
        return action.payload
        case "search":
           // console.log(action);
            return action.payload.products.filter(product=>{
                return product.title.toLowerCase().startsWith(action.payload.searchText)
        
            })
            case "filter":
                return action.payload.products.filter(product=>{
                          if(product.category ===action.payload.filterValue){
                            return product
                          }
                })

            case "a-z":
                const sortArray=[...action.payload.map((product)=>product.title.toLowerCase()).sort()]
                const sortData=sortArray.map((value)=>{
                    let data=action.payload.find((product)=>product.title.toLowerCase()===value)
                    return data
                }) 
                return sortData
            case "z-a":
                const sortArray1=[...action.payload.map((product)=>product.title.toLowerCase()).sort().reverse()]
                const sortData1=sortArray1.map((value)=>{
                    let data1=action.payload.find((product)=>product.title.toLowerCase()===value)
                    return data1
                }) 
                return sortData1
            case "h-l":
                    let priceSort=action.payload.sort((a,b)=>b.price - a.price)
                    return[...priceSort]
            case "l-h":
                    let priceSort1=action.payload.sort((a,b)=>a.price - b.price)
                    return[...priceSort1]       
            default:
                return state
    }
}

export default productReducer