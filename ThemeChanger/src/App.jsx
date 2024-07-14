import './App.css'
import Main from './components/Main'
import NavBar from './components/NavBar'
import ThemeContextProvider from './context/ThemeContext'

function App() {
  return (
    <ThemeContextProvider>
      <div>
        <NavBar />
        <Main />
      </div>
    </ThemeContextProvider>
  )
}

export default App
