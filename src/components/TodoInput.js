import React,{useEffect, useState} from 'react'



function TodoInput({addList, editList, updateListItem}) {
    const[inputText, setInputText]=useState('');
  
    const handleEnterPress=(e)=>{
        if(e.keyCode===13 && editList===""){
            addList(inputText)
            setInputText("")
        }
        if(e.keyCode===13 && editList!==""){
          updateListItem(editList,inputText)
          setInputText("")
      }
        
    }

    useEffect(()=>{
      if(editList){
        setInputText(editList);
      }
    },[editList])

    const placeholderText=()=>{
      return "SAS"
    }
  return (
    <div className='input-container'>
      <input type='text' className='input-box-todo' placeholder={placeholderText()}
      value={inputText}
      onChange={(e)=>{
        setInputText(e.target.value)
      }}
      onKeyDown={handleEnterPress}
      />


      <button className='add-btn'
      onClick={(key)=>{
        if(editList==="")
        {addList(inputText)
        setInputText("")}
        else{
            updateListItem(editList,inputText)
            //console.log(key)
            //console.log(inputText,editList)
            setInputText("")
           
        }
      }}
      >{editList!==""?"OK":"+"}</button>
    
    </div>
  )
}

export default TodoInput
