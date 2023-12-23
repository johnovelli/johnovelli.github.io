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
    <div className={`main main-${theme}`}>
      <Header
        theme={theme}
        language={language}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />
      <div className={`content content-${theme}`}>
        <hr />
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
