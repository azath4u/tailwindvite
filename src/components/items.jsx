import React, { useState } from 'react'
import FruitCard from './FruitCard.jsx';
const Items = () => {
    const [fruits,setFruits]=useState([{id:1,image:'1',name:'Green grapes',price:200},
                           {id:2,image:'2',name:'Pomegranate',price:300},
                           {id:3,image:'3',name:'Black grapes',price:100},
                            {id:4,image:'4',name:'Grape fruit',price:250},
                            {id:5,image:'5',name:'Berry',price:150},
                            {id:6,image:'6',name:'Lemon',price:400},
                            {id:7,image:'7',name:'Orange',price:500} 

    ]);
  return (
   <section className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 place-items-center">{
    fruits.map((fruit)=>{
       return <FruitCard key={fruit.id} fruit={fruit}/>
})
}
   </section>
  )
}

export default Items