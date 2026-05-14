import { Outlet } from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
 

  return (
    <>
      <header className='app-header'>
        <Header/>
      </header>
      <main >
        <Outlet/>
      </main>
      <footer >
        <Footer/>
      </footer>
      
    </>
  )
}

export default App
