import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Team from './components/Team'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Gallery />
        <Team />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
