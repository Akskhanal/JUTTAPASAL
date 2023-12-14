import {  ReactNode, createContext, useContext, useState } from "react";




type ShoppingCartProps={
   // openCart:()=> void
    //closeCart:()=>void
    cartQuantity:number
    cartItem:cartItem[]
    getItemQuantity:(id:number)=>number
    increaseQuantity:(id:number)=>void
    decreaseQuantity:(id:number)=>void
    removeQuantity:(id:number)=>void
}
type ProviderProps={
    children:ReactNode
}

type cartItem={
    id:number
    quantity:number

}

const ShoppingCartContext=createContext({} as ShoppingCartProps)

 export const useShopping=()=>{
    return useContext(ShoppingCartContext)
}
 
export const ShoopingCartProvider=({children}:ProviderProps)=>{
    
    const [cartItem,setCartItems]=useState<cartItem[]>([])



   const  cartQuantity=cartItem.reduce((quantity,item)=>item.quantity+quantity,0)
    const getItemQuantity=(id:number)=>{
        return cartItem.find(items=> items.id == id)?.quantity || 0
    }
    const increaseQuantity=(id: number)=>{
        setCartItems(currItems=>{
            if(currItems.find(item=>item.id ==id)== null){
                return [...currItems,{id,quantity:1}]
            }else{
                return currItems.map(item=>{
                    if(item.id==id){
                        return{...item,quantity:item.quantity+1}
                    }else{
                        return item
                    }
                })
            }
        })
    
    }
    
    const decreaseQuantity=(id: number)=>{
        setCartItems(currItems=>{
            if(currItems.find(item=>item.id ==id)?.quantity==1){
                return currItems.filter(item=> item.id !==id)
            }else{
                return currItems.map(item=>{
                    if(item.id==id){
                        return{...item,quantity:item.quantity-1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    const removeQuantity=(id:number)=>{
        setCartItems(currItems=>{
            return currItems.filter(item=> item.id !==id)})
    }
      


   
    return(
        <ShoppingCartContext.Provider value={{getItemQuantity,increaseQuantity,decreaseQuantity,removeQuantity,cartQuantity,  cartItem,
        }}>
            {children}
            
        </ShoppingCartContext.Provider>
    )
}



