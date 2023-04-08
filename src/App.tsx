import './App.css'
import { capitalizeFirstLetterOfASentence } from './Questions/CapitalizeFirstLetterOfASentence'
import Timer from './Questions/Timer/Timer'

function App() {

  return (
    <div className='App'>
      {capitalizeFirstLetterOfASentence(
        'THE triple quick brown foxes jumped over a lazy dog on their way to my CRIB'
      )}
      <Timer />
    </div>
  )
}

export default App
