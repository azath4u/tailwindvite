import React,{useState} from 'react'
import FruitCard from './FruitCard'
import Divider from './Divider.jsx'
const SeasonSpecial = () => {
  const [fruits, setFruits] = useState([

    {id:2,image:'2',name:'Pomegranate',price:300},
    {id:3,image:'3',name:'Black grapes',price:100},
     {id:4,image:'4',name:'Grape fruit',price:250},
  ])
  return (
    <section className='w-5/6 mx-auto my-8'>
      <Divider title={"SEASON SPECIALS"} />
           <div className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 place-items-center mt-2">{
    fruits.map((fruit)=>{
       return <FruitCard key={fruit.id} fruit={fruit}/>
})  
}
</div>  
    </section>
  )
}

export default SeasonSpecial