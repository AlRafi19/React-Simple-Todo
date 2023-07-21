import { useState } from "react";

{/* ........Working With Dynamic Array With UseState.......*/}
const App = () => {

  let[list,setList]=useState([])
  let[item,setItem]=useState("")

  const AddToList=()=>{
    list.push(item)
    setList([...list])
  }
  const RemoveList=(index)=>{
    list.splice(index,1)
    setList([...list])
  }

  return (
    
   <div className="container">
  
   <h1 className="center">Sample Todo</h1>

   <input onChange={(e)=>setItem(e.target.value)} placeholder="Item"/>
   <button onClick={AddToList}>Add</button>
      {
        list.length!==0?(
          list.map((element,index)=>{
            return (<ul>
                <li>{element}</li>
                <button onClick={()=>{
                  RemoveList(index)
                }}>Remove</button>
                </ul>

            )

          })
        ):(<h4></h4>)
      }



   
   </div>
  );
};

export default App;