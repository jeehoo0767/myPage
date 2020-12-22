import React, {useState} from 'react'
import './App.css'
import AddNumberRoot from './AddNumberRoot'
import AddNumber from './AddNumber'
import DisplayNumberRoot from './DisplayNumberRoot'

function App(props) {

  const [number, setnumber] = useState(0)

  return (
    <div>
      <h1>Root</h1>
      <div className="flex_box">
        <AddNumberRoot onClick={function(size){
          setnumber(number + size);
        }}/>
        <DisplayNumberRoot number={number}/>
      </div>
    </div>
  )
}

export default App
