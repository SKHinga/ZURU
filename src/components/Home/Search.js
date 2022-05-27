import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { IoPeople } from 'react-icons/io5';
import { Button } from '@material-ui/core'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function Search() {
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());

const selectionRange = {
  startDate: startDate,
  endDate: endDate,
  key: 'selection',
};

function handleSelect(range){
  setStartDate(range.selection.startDate);
  setEndDate(range.selection.endDate);
}

  return (
    <div className='search absolute'>
       <DateRangePicker ranges={
         [selectionRange]} onChange={handleSelect}/>
         <h2 className='flex items-center justify-between bg-white px-3'>
           Number of guests
          <IoPeople/>
         </h2>
         <div className='find bg-white p-1'>
          <input min={0} defaultValue={2} type='number' className='p-1 put'/>
          <Button variant='outlined'>Zuru</Button>
         </div>
    </div>
  )
}

export default Search