import React, { useState } from 'react'
import Card from './components/Card'
import data from './data'

const App = () => {
  const [index, setIndex] = useState(0)
  const review = data[index]

  const handleIncrement = () => {
    setIndex(prev => (prev + 1) % data.length)
    console.log("inc",index)
  }
  const handleDecrement = () => {
    setIndex(prev => Math.abs(prev - 1) % data.length)
    console.log("dec",index)
  }
  const handleSurprise = () => {
    const random = Math.floor(Math.random()*data.length)
    console.log(random)
    if(index === random) handleSurprise()
    else setIndex(random)
  }

  console.log(index)

  return (
    <section className='flex flex-col justify-center items-center w-full h-screen space-y-16'>
      <h1 className='font-bold text-4xl border-b-4 border-blue-300 pb-1'>Our Reviews</h1> 
      <Card
        key={review.id}
        {...review}
        Increment={handleIncrement}
        Decrement={handleDecrement}
        Surprise={handleSurprise}
      />
    </section>
  )
}

export default App