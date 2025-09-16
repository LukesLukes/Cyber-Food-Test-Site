import './App.css'
import Header from './components/Header'
import Contatos from './components/Contatos'
import OpcoesFoodTrucks from './components/OpcoesFoodTrucks'
import Inicio from './components/Inicio'
import Sobre from './components/SobreNos'


function App() {
  return (
    <>
      <Header />
        <main style={{ marginTop: '70px', width: '100%' }}>
          <Inicio />
          <OpcoesFoodTrucks />
          <Sobre />
        </main>
      <Contatos />

    </>
  )
}

export default App