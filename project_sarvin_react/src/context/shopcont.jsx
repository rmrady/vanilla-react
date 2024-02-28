import { createContext, useEffect, useState } from "react";

export const Shopcontext = createContext(null);

export const Shopcontextprovider = (props)=>{
    const [cartitem, setCartitem] = useState();
    useEffect(()=>{
        const data = localStorage.getItem("raziehStylecodding")
        setCartitem(!!JSON.parse(data) ? JSON.parse(data): [] )
    },[])

    useEffect(()=>{
        if(cartitem !== undefined)
        localStorage.setItem("raziehStylecodding", JSON.stringify(cartitem))
    },[cartitem])


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
    
    const resetcort = ()=>{
        setCartitem();
        localStorage.removeItem("raziehStylecodding")
    }

    const contextvalue ={cartitem , addtocart,removecart,resetcort}
    return <Shopcontext.Provider value={contextvalue}>{props.children}</Shopcontext.Provider>
}