import { NavBar } from './components/sections/NavBar/NavBar'
import { Hero } from './components/sections/Hero/Hero'
import { About } from './components/sections/About/About'
import { Principles } from './components/sections/Principles/Principles'
import { Experience } from './components/sections/Experience/Experience'
import { Skillset } from './components/sections/Skillset/Skillset'
import { Work } from './components/sections/Work/Work'
import { Contact } from './components/sections/Contact/Contact'

function App() {
  return (
    <div className="siteFrame">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Principles />
        <Experience />
        <Skillset />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App
