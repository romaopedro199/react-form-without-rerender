import React, { useState } from 'react'

const MyInput = React.forwardRef((props, ref) => {
  const [value, setValue] = useState(ref.current[props.name])

  function handleChange (e) {
    ref.current[props.name] = e.target.value
    setValue(e.target.value)
  }

  return (
    <input placeholder={props.placeholder} value={value} onChange={handleChange} />
  )
})

export default MyInput
