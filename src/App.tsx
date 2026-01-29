// App.tsx
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import TechStack from './components/TechStack'
import HonorWall from './components/HonorWall'
import Achievements from './components/Achievements'
import JoinUs from './components/JoinUs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <HonorWall />
      <Achievements />
      <JoinUs />
      <Footer />
    </>
  )
}

export default App