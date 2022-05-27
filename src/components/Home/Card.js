import React from 'react'

function Card({ title, src='https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description, price}) {
  return (
    <div className='card'>
      <img src={src} alt='Place'/>
      <div className='card-info prose lg:prose-xl'>
        <h2 className='text-lg font-bold'>{title}</h2>
        <h4 className='text-base font-medium'>{description}</h4>
        <h3 className='text-small font-normal'>{price}</h3>
      </div>
    </div>
  )
}

export default Card