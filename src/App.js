import './App.css';
import Counter from './components/Counter'
import Test from './components/Test'
import { useState } from 'react'

function App() {

  const [showCounter, setShowCounter] = useState(false)
  const [showHello, setShowHello] = useState(false)

  const pickAComponent = () => {
    if (showCounter) {
      return <Counter />
    } else {
      return <Test />
    }
  }

  return (
    <div className="App">
      <button onClick={() => setShowCounter(!showCounter)}>Toggle Counter</button>
      {<button onClick={() => setShowHello(!showHello)}>Toggle Hello</button>}
      {/*showCounter ? <Counter /> : <Test />*/}
      {/*pickAComponent()*/}

      {showCounter && <Counter />}
      {showHello && <Test />}

    </div>
  );
}

export default App;
