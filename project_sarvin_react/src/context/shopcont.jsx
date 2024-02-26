import { createContext, useState } from "react";

export const Shopcontext = createContext(null);

export const Shopcontextprovider = (props)=>{
    const [cartitem, setCartitem] = useState([]);
    const addtocart =(itemId)=>{
        if(!cartitem?.find((item)=> item.id == itemId))
            setCartitem([...cartitem, {id : itemId, count: 1}])
        else
            setCartitem(cartitem.map((item)=>{
                if(item.id == itemId)
                    return{...item , count : item.count + 1}
                else return item
            
    }))

    }

    const removecart =(itemId)=>{
        setCartitem(cartitem.map((i)=>{
            if(i.id == itemId)
            return{...i, count: i.count == 0 ? 0 : i.count - 1}
        else return i
        }))
    }

    const contextvalue ={cartitem , addtocart,removecart}
    return <Shopcontext.Provider value={contextvalue}>{props.children}</Shopcontext.Provider>
}