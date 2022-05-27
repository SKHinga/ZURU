import React from 'react';
import { Button } from '@material-ui/core'

function Searched() {
  return (
    <div>
      <div className='container m-4 amaze'>
        <p className='text-sm mb-2'>62 stays · 1 June to 30 June · 2 guest</p>
        <h3 className='text-4xl font-bold mb-3'>Stays nearby</h3>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <div>
        {/* <SearchResult/> */}
      </div>
    </div>
  )
}

export default Searched