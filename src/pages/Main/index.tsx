import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import './main.css'

type MainProps = {
  theme: string;
  language: string;
  toggleTheme: () => void;
  toggleLanguage: (language: 'Pt_br' | 'Eng_us') => void;
}

function Main({ theme, language, toggleTheme, toggleLanguage }: MainProps) {

  return (
    <div className={`main-${theme}`}>
      <Header
        theme={theme}
        language={language}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />
      <hr />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
