import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import './main.css'

function Main() {
  const [theme, setTheme] = useState<'Light' | 'Dark'>('Light')
  const [language, setLanguage] = useState<'Pt_br' | 'Eng_us'>('Pt_br')

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'))
  }

  function toggleLanguage() {
    setLanguage((prevTheme) => (prevTheme === 'Pt_br' ? 'Eng_us' : 'Pt_br'))
  }

  return (
    <div className={`main-${theme}`}>
      <Header
        theme={theme}
        language={language}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />
      <div className='content'>
        <hr />
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
