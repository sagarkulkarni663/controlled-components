import React, { useState } from 'react'
import Message from './Message'
let initialState = [
  {
    name: "sagar",
    des: "iam an software engineer"
  },
  {
    name: "ram",
    des: "iam an mechanical engineer"
  },
  {
    name: "krishna",
    des: "iam an civil engineer"
  },
  {
    name: "What are controlled components",
    des: "In React, controlled components are components whose state is managed by a parent component. They receive their current value and update functions as props from the parent, enabling centralized control over the component's behavior."
  }
]
const App = () => {
  const [list, setList] = useState(initialState)
  const [toggle, setToggle] = useState(null)
  const handleToggle = (name) => {
    setToggle((prevdata) => (prevdata === name ? null : name))
  }
  return (
    <div style={{ display: "flex", textAlign: "center", flexDirection: "column", justifyContent: "center", height: "100vh", alignItems: "center", top: "50px", gap: '8px' }}>
      <h1 style={{ color: "green" }}>CONTROLLED - COMPONENTS - REACT</h1>
      {list.map((item) => {
        return (
          <div >
            <div style={{ cursor: "grabbing" }} onClick={() => handleToggle(item.name)}>
              <h2>{item.name} - </h2>
            </div>
            <h3>{toggle === item.name && <Message desc={item.des} />}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default App