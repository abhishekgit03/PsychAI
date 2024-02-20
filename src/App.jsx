import { useState, useEffect } from 'react'
import {Search} from './Components'
import {Loader} from './Components'
import {Navbar} from './Components'
import {About} from './Components'
import ReactMarkdown from 'react-markdown'
import { ThemeProvider } from './context/theme'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [answer, setAnswer] = useState(``)
  const [isLoading, setLoader]=useState(false)
  const [themeMode, setThemeMode] = useState("light")
  
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <main>
      <div className='main'>
        <div className='gradient' />
      </div>
    <div className='dark:bg-gray-800'>
      <Navbar />
      <div className="flex flex-col items-center  h-screen p-10 ">
      <h1 className='head_text text-pink-500'>
        PsychAI<br className='max-md:hidden' />
        <span className='text-blue1 text-3xl'>Your mental health companion</span>
      </h1>
      <h2 className='desc mb-5 italic'>
      Feeling hesitant to open up to someone? Connect with PsychAI and lighten your load in confidence.
      </h2>
      <Search
      text={text}
      onTextChange={(text) => setText(text)}
      setAnswer={setAnswer}
      setLoader={setLoader}
      />
      <Loader
      isLoading={isLoading}
      />
      <div className="flex flex-col bg-white border-2 rounded-lg p-4 mt-10 items-cente w-1/2 h-96 overflow-auto">
      <div className="text-lg text-gray-700 whitespace-pre-wrap"><ReactMarkdown>{answer}</ReactMarkdown></div>
      </div>
      </div>
    </div>
    </main>
    </ThemeProvider>
   
  )
}

export default App
