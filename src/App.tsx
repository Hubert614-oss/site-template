import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Accueil from './components/Accueil'
import Galerie from './components/Galerie'
import Contact from './components/Contact'

function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Accueil />
        <Galerie />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App