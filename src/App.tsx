import Header from './components/Header'
import Footer from './components/Footer'
import Accueil from './components/Accueil'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Accueil />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App