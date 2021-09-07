import { useRef } from 'react'
import MyInput from './MyInput'

function App () {
  const data = useRef({
    name: '',
    age: ''
  })

  function handleClick () {
    console.log('Name: ' + data.current.name)
    console.log('Age: ' + data.current.age)
  }

  return (
    <>
      <MyInput ref={data} name='name' placeholder='Input name' />
      <MyInput ref={data} name='age' placeholder='Input age' />
      <button onClick={handleClick}>Log ref value</button>
    </>
  )
}

export default App
