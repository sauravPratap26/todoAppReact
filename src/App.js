
import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
  const[listTodo, setListTodo]=useState([])
  const[editList, setEditList]=useState("")
  
  let addList=(inputText)=>{
    if(inputText!=="")
    setListTodo([...listTodo,inputText])
  }

  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo]
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
    console.log(key)
  }

  const editListItem=(key)=>{
    // console.log(listTodo[key])
    setEditList(listTodo[key])
    //console.log(editList);
    
  }

  const updateListItem=(original,newTodo)=>{
    // const index=key;
    // const newList=[...listTodo];
    // newList.splice(index,1,)
    // console.log(listTodo);
    // console.log(original)
    // console.log(newTodo)

    let newListTodo=[...listTodo]

    for (var abc in newListTodo){
      
      if(newListTodo[abc]===original)
      {newListTodo[abc]=newTodo
      break}
    }
    setListTodo([...newListTodo])
    setEditList("")
    console.log(listTodo)
    
  }

  return (
   <div className='main-container'>
    <div className='center-container'>
      <TodoInput addList={addList}
       editList={editList}
       updateListItem={updateListItem}></TodoInput>
      <h1 className='app-heading'>TODO</h1>
      <hr></hr>
      {
        listTodo.map((listItem, i)=>{
          return(
            <TodoList listTodo={listTodo} key={i} index={i} item={listItem} deleteListItem={deleteListItem}
            editListItem={editListItem}/>
          )
        })
      }
    </div>
   </div>
  );
}

export default App;
