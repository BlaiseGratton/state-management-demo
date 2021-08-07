import { useState, useEffect } from 'react'

const Counter = () => {
  const [counter1, setCounter1] = useState(1)
  const [counter2, setCounter2] = useState(1)
  const increment1 = () => setCounter1(counter1 + 1)
  const decrement1 = () => setCounter1(counter1 - 1)
  const increment2 = () => setCounter2(counter2 + 1)
  const decrement2 = () => setCounter2(counter2 - 1)

  useEffect(() => {
    console.log('counter 1')
  }, [counter1])

  useEffect(() => {
    console.log('counter 2')
  }, [counter2])

  useEffect(() => {
    console.log('both and')
  }, [counter1, counter2])

  useEffect(() => {
    console.log('running once')
  }, [])

  return (
    <>
      <div>
      <p>{counter1}</p>
      <button onClick={increment1}>Increment counter 1</button>
      <button onClick={decrement1}>Decrement counter 1</button>
      </div>

      <div>
      <p>{counter2}</p>
      <button onClick={increment2}>Increment counter 2</button>
      <button onClick={decrement2}>Decrement counter 2</button>
      </div>
    </>
  )
  /*
  const increment = () => {
    console.log('running increment')
    //counterState.value += 1
    setCounter(counter + 1)
  }
  const decrement = () => {
    console.log('running decrement')
    //counterState.value -= 1
    setCounter(counter - 1)
  }
  */
  //console.log('I am rendering!')

  /*
  const stateStuff  = useState(1)
  const counter = stateStuff[0]
  const setCounter = stateStuff[1]
  */

}

export default Counter
