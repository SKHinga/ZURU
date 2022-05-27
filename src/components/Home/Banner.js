import React, {useState} from 'react'
import { Button } from '@material-ui/core'
import Search from './Search';


function Banner() {
const [unhide, setUnhide] = useState(false);

const handleHide = () => {
  setUnhide(unhide=>!unhide);
};


  return (
    <div className='banner relative'>

      <div className='flex flex-col'>

        <Button className="material-button" variant='outlined' onClick={handleHide}>
          {unhide? "Hide" : "Search Dates"}
        </Button>
        {unhide && <Search/>}
      </div>
      <div className='banner-info bg-black text-white px-4 flex flex-col justify-end pb-4 leading-relaxed'>
        <h2 className='font-bold text-2xl'>It's a Big World out there, Go Explore 🚀</h2>
        <h5 className='font-thin'>We always make our customers happy by providing many choices.</h5>
        <Button className="ton">
          Explore Nearby
        </Button>
      </div>
    </div>
  )
}

export default Banner