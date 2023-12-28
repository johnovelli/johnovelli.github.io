import { Route, Routes } from "react-router-dom";
import { SetStateAction, useState } from "react";
import Main from "./pages/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css'

function App() {
  const [theme, setTheme] = useState<'Light' | 'Dark'>('Dark')
  const [language, setLanguage] = useState<'Pt_br' | 'Eng_us'>('Eng_us')

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'))
  }

  function toggleLanguage(language: SetStateAction<'Pt_br' | 'Eng_us'>) {
    setLanguage(language)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main theme={theme} language={language} toggleTheme={toggleTheme} toggleLanguage={toggleLanguage} />}>
          <Route path="/" element={<Home theme={theme} language={language} />} />

          <Route path="/about" element={<About theme={theme} language={language} />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
