import React from 'react'

function TodoList({item, deleteListItem, index,editListItem}) {
  return (<div>
   <li className='list-item'>
    {item}
    
   </li>
   <button className='add-btn'
   onClick={(e)=>{
     deleteListItem(index)
   }}
   >-</button>

   <button className='add-btn'
   onClick={(e)=>{
    editListItem(index)
   }}
   >
    edit
   </button>
   </div>
  )
}

export default TodoList
