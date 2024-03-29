import { Link } from 'react-router-dom'
import fb_btn from '../../assets/fb_black.png'
import insta_btn from '../../assets/insta_black.png'
import whats_btn from '../../assets/whats_black.png'
import email_btn from '../../assets/email_black.png'
import pt_br from '../../assets/pt_br.png'
import eng_us from '../../assets/eng_us.png'
import './header.css'

type HeaderProps = {
  theme: string;
  language: string;
  toggleTheme: () => void;
  toggleLanguage: (language: 'Pt_br' | 'Eng_us') => void;
}

function Header({ theme, language, toggleTheme, toggleLanguage }: HeaderProps) {
  return (
    <header className={`header ${theme}`}>
      <div className={`header-top header-top-${theme}`}>
        <div className='header-top-btns'>
          <div className='languages'>
            <button className='language-btn' onClick={() => toggleLanguage('Pt_br')}>
              <img src={pt_br} alt="" />
            </button>
            <button className='language-btn' onClick={() => toggleLanguage('Eng_us')}>
              <img src={eng_us} alt="" />
            </button>
          </div>
          <div className='btns'>
            <img className='fb_btn' src={fb_btn} alt="Facebook" />
            <img className='insta_btn' src={insta_btn} alt="Instagram" />
            <img className='whats_btn' src={whats_btn} alt="Whatsapp" />
            <img className='email_btn' src={email_btn} alt="Email" />
            <input id='checkbox' type='checkbox' onClick={toggleTheme} />
            <label htmlFor='checkbox' />
          </div>
        </div>
      </div>
      <div className={`header-bottom header-bottom-${theme}`}>
        <div className='header-bot-name'><span>Joh Novelli</span></div>
        <div className='header-bot-nav'>
          <Link className={`header-bot-nav-link link-${theme}`} to="/">
            Home
          </Link>
          <Link className={`header-bot-nav-link link-${theme}`} to="/projects">
            {language === 'Pt_br' ? 'Projetos' : 'Projects'}
          </Link>
          <Link className={`header-bot-nav-link link-${theme}`} to="/about">
            {language === 'Pt_br' ? 'Sobre' : 'About'}
          </Link>
          <Link className={`header-bot-nav-link link-${theme}`} to="/contact">
            {language === 'Pt_br' ? 'Contatos' : 'Contacts'}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
