import { useState } from 'react'
import Header from './components/header/HeaderComponent'
import Footer from './components/footer/FooterComponent'
import MainSection from './components/mainSection/MainSectionComponent'

/* import './App.css' */

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="main">
        <MainSection  />
      </main>

      <Footer />

    </>
  )
}

export default App
