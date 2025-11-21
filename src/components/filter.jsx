import React, { useState } from 'react'

const Filter = () => {
    const[selectedItem,setSelectedItem]=useState(1);
    return(
    <section className='my-10 px-3 w-3/5 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around '>
      <button onClick={() => setSelectedItem(1)}
         className={`font-poppins border border-slate-500 px-16 py-3 rounded-full transform hover:scale-110 duration-150 my-3 md:my-0 m-2 ${selectedItem === 1 ? 'bg-green-400 text-white' : 'text-slate-400'}`}>Latest</button>
      <button onClick={() => setSelectedItem(2)}
        className={`font-poppins border border-slate-500 px-16 py-3 rounded-full transform hover:scale-110 duration-150 my-3 md:my-0 m-2 ${selectedItem === 2 ? 'bg-green-400 text-white' : 'text-slate-400'}`}>Best Seller</button>
      <button onClick={() => setSelectedItem(3)}
        className={`font-poppins border border-slate-500 px-16 py-3 rounded-full transform hover:scale-110 duration-150 my-3 md:my-0 m-2 ${selectedItem === 3 ? 'bg-green-400 text-white' : 'text-slate-400'}`}>Specials</button>
    </section>
  )
}

export default Filter