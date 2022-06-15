import React from 'react'
import Task from './components/Overview'

function App() {
  const [typedData, setTypedData] = React.useState('')

  function addTypedData(event) {
    setTypedData(event.target.value)
  }

  const [allData, setAllData] = React.useState([])

  function addData() {
    setAllData(prevInputData => {
      return [...prevInputData, typedData]
    })
  }

  const tasks = allData.map((task, index) => {
    const item = <Task data={task} key={index}></Task>
    return item
  })


  return (
    <div>
      <input
        type="text"
        value={typedData}
        onChange={addTypedData}>
      </input>

      <button
        onClick={addData}
      >
      hello
      </button>
      <ul>
        {tasks}
      </ul>
    </div>
  )
}

export default App;
