import './App.css'
import BackgroundPrincipal from './components/BackgroundPrincipal'
import Header from './components/Header'
import Contatos from './components/Contatos'
import OpcoesFoodTrucks from './components/OpcoesFoodTrucks'


function App() {
  return (
    <>
      <Header />
      <BackgroundPrincipal>
        <main style={{ marginTop: '70px', width: '100%' }}>
          <OpcoesFoodTrucks />
        </main>
        <Contatos />
      </BackgroundPrincipal>

    </>
  )
}

export default App
