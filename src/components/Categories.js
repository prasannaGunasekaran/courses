import React from 'react'

const Categories = ({filteredMenu,categories}) => {
  return (
    <div className='btn-container'>
      {categories.map((category,index)=>{
        return<button type='button' className='filter-btn
        key={index} ' onClick={()=>filteredMenu(category)}>
          {category}
        </button>
      })}
  </div>
  )
}

export default Categories