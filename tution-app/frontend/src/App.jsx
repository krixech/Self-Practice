import { useState } from 'react'
import './App.css'
import { CreateHm } from './components/CreateHm'
import { HomeWorks } from './components/HomeWorks'

function App() {
  const [homeworks, setHomeworks] = useState(0)

  return (
    <div>
      <CreateHm />
      <HomeWorks homeworks = {homeworks}>
      </HomeWorks>
    </div>
  )
}

export default App
