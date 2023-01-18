import React from 'react'

const Card = (props) => {
  return (
    <div className='w-2/5 min-w-[250px] sm:min-w-[500px] shadow-xl rounded-lg p-5 flex flex-col items-center justify-center space-y-3 bg-white'>
        <img className='w-44 h-44 rounded-full space-y-2' src={props.image} alt="profile avatar"/>
        <div className='text-center'>
          <h4 className='font-semibold tracking-wide'>{props.name}</h4>
          <h5 className='text-blue-500 mb-2'>{props.job.toUpperCase()}</h5>
          <p className='text-sm text-gray-700 min-h-[60px]'>{props.text}</p>
        </div>
        <div className='flex flex-col justify-center items-center space-y-1'>
          <div className='space-x-3 text-blue-500'>
            <button className='font-bold text-2xl p-1 hover:text-blue-200 rounded-xl' onClick={props.Decrement}>&lt;</button>
            <button className='font-bold text-2xl p-1 hover:text-blue-200 rounded-xl' onClick={props.Increment}>&gt;</button>
          </div>
          <button className='bg-blue-100 p-2 text-blue-500 rounded-xl hover:bg-blue-300' onClick={props.Surprise}>Surprise Me</button>
        </div>
    </div>
  )
}

export default Card
