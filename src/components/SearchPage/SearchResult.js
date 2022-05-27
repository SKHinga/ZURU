import React from 'react'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className='flex relative m-5 p-5 cursor-pointer anoth hover:opacity-80'>
      <img src={img} alt="" />
            <FavoriteBorderIcon className="absolute top-5 right-10" />

          <div className='flex flex-col justify-between pl-5'>
            <div className="searchResult__infoTop">
                <p>{location}</p>
                <h3 className='mt-2.5 font-light'>{title}</h3>
                <p className='mt-2.5 text-gray-600 text-xs'>____</p>
                <p className='mt-2.5 text-gray-600 text-xs'>{description}</p>
            </div>

            <div className="flex justify-between">
                <div className="flex items-center">
                    <StarIcon className="text-red-700" />
                    <p>
                        <strong>{star}</strong>
                    </p>
                </div>
                <div className='absolute bottom-5 right-7'>
                    <h2>{price}</h2>
                    <p className='items-right'>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchResult;