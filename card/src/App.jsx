import React, { useEffect, useState } from 'react';



export default function App() {
  const [data, setData] = useState([])
  const [card, setCard] = useState([]) 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(para => {
        setData(para)
      }, [])
  })

  const updatecard = (id , title,e)=>{
    if(e.target.getAttribute('data-status') == 'off'){
      e.target.setAttribute('data-status' ,'on')
      let temp = {
        id : id,
        name : title
      }
      setCard(()=>{
        return card.concat(temp)
      })
    }

  }
  
  return (
    <main id='list'>
      <Basket card={card} />
      {data?.map((val)=>{
        return(
          <article data-num={val.id} key={'pro' + val.id} className='flex p-5'>
            <Figure price={val.price} src={val.image}/>
            <Txt title={val.title} desc={val.description} updatecard={()=> updatecard(val.id, val.title, event )}/>
          </article>
        )
      })}
    </main>
  )
}

function Basket({card}){
  const del=(e)=>{
    let num =e.target.parentElement.parentElement.getAttribute('data-num')
    e.target.parentElement.parentElement.remove()
    document.querySelector('#list>article:nth-of-type('+num+')>div>button').setAttribute('data-status' , 'off')
    // let clonecard= card
    // clonecard.splice((num-1),1)
    
  }
  return(
    <ul className='w-[500px] p-8 fixed top-0 right-0 bg-pink-900 text-black'>
      {card.map((val)=>{
        return(
          <li data-num={val.id} className='border m-4 px-5  ' key={val.id}>
            <h3>
              <span>{val.id}</span>:
              <span>{val.name}</span>
              <span onClick={del} className='text-[20px] text-white font-bold cursor-pointer'>x</span>
            </h3>
          </li>
        )
      })}
    </ul>
  )
}

function Figure({src, price}){
  return(
    <figure>
      <img className="w-[30%]" src={src} alt="" />
      <figcaption>{price}</figcaption>
    </figure>
  )
}

function Txt({title, desc ,updatecard}){
  return(
    <div className='w-[70%]'>
      <h2>{title}</h2>
      <p>{desc}</p>
      <button data-status='off' className='bg-red-300 text-white px-5 ' onClick={updatecard}>add to click</button>
    </div>
  )
}


