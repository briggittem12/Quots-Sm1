import { useState } from 'react'
import './App.css'
import FunButton from './components/FunButton'
import QuotesCard from './components/QuotesCard'
import quots from './json/quots.json'
import colors from './utilits/colors'


function App() {

  let getRandomQuotes = arr => {
    let randomComplement = Math.floor(Math.random() * arr.length)
    return arr[randomComplement]
  }

  let quotesRandom = getRandomQuotes(quots)
  let colorRandom = getRandomQuotes(colors)

  let [anyColors, setAnyColors] = useState(colorRandom)
  let [formatQuot, setformatQuot] = useState(quotesRandom) 

  let buttonFuntional = () => {
    quotesRandom = getRandomQuotes(quots)
    colorRandom = getRandomQuotes(colors)

    setformatQuot(quotesRandom)
    setAnyColors(colorRandom)
  }
  
  let bgColor = {
    backgroundColor: anyColors
  }

  return (
    <div className="App" style={bgColor}>
      <QuotesCard formatQuot={formatQuot} anyColors={anyColors}/>
      <FunButton anyColors={anyColors} buttonFuntional={buttonFuntional}/>
    </div>
  )
}

export default App
