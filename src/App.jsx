import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { content } from './data/content'
import './App.css'

function App() {
  const [lang, setLang] = useState('en')
  const t = content[lang]

  return (
    <>
      <Header lang={lang} setLang={setLang} labels={t.nav} />
      <main className="page">
        <Hero lang={lang} content={t} />
        <About lang={lang} content={t} />
        <Projects lang={lang} title={t.selectedWork} />
        <Experience lang={lang} content={t} />
        <Skills title={t.skillsTitle} />
        <Contact content={t} />
      </main>
    </>
  )
}

export default App
