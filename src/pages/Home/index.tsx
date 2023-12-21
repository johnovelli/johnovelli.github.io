import { useNavigate } from 'react-router-dom';
import './home.css';
import picture from '../../assets/joh_picture.jpg'
import html_logo from '../../assets/html.png'
import css_logo from '../../assets/css.png'
import js_logo from '../../assets/js.png'
import react_logo from '../../assets/react.png'
import html_logo_dark from '../../assets/html2.png'
import css_logo_dark from '../../assets/css2.png'
import js_logo_dark from '../../assets/js2.png'
import react_logodark from '../../assets/react.png'

type HomeProps = {
  theme: string;
  language: string;
}

function Home({ theme, language }: HomeProps) {
  const navigate = useNavigate();

  return (
    <div className={`home-full-${theme}`}>
      <div className={`home-div home-div-${theme}`}>
        <div className='home-text'>
          {language === 'Pt_br' ? (
            <div>
              <h1>Ola, seja bem-vindo!</h1>
              <p><strong>Meu nome eh George Novelli Tarlazis, sou Desenvolvedor Front-End Jr formado pela Trybe. </strong>
                <strong>Minha paixão por código, resolução de problemas e constante aprendizado impulsionam minha jornada nessa área que sempre admirei.
                </strong></p>
              <p><strong>
                Vindo de uma area onde o trabalho em equipe, cooperação e comunicação eram fundamentais, trago essa experiência como meu ponto forte.
              </strong></p>
            </div>
          ) : (
            <div>
              <h1>Hello, welcome!</h1>
              <p><strong>My name is George Novelli Tarlazis, and I am a Junior Front-End Developer graduated from Trybe.</strong>
                <strong>My passion for code, problem-solving, and continuous learning drives my journey in this field that I have always admired.</strong>
              </p>
              <p><strong>Coming from a field where teamwork, cooperation, and communication were crucial, I bring this experience as my strength.</strong></p>
            </div>
          )}
          <button onClick={() => navigate('/contact')}>{language === 'Pt_br' ? <strong>Sobre</strong> : <strong>About</strong>}</button>
          <div className='tools'>
            <img className='skill' src={theme === 'Light' ? html_logo : html_logo_dark} alt="" />
            <img className='skill' src={theme === 'Light' ? css_logo : css_logo_dark} alt="" />
            <img className='skill' src={theme === 'Light' ? js_logo : js_logo_dark} alt="" />
            <img className='react' src={react_logo} alt="" />
          </div>
        </div>
        <div className='home-img'>
          <img src={picture} alt="myself" />
        </div>
      </div>
    </div>
  );
}

export default Home;
