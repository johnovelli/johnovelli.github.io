import { useNavigate } from 'react-router-dom';
import InfoText from '../../components/InfoText';
import SkillsImgs from '../../components/SkillsImgs';
import Projects from '../../components/ProjectsDiv';
import picture from '../../assets/joh_picture.jpg'
import './home.css';

type HomeProps = {
  theme: string;
  language: string;
}

function Home({ theme, language }: HomeProps) {
  const navigate = useNavigate();

  return (
    <div className={`home-full home-full-${theme}`}>
      <div className={`home-div home-div-${theme}`}>
        <div className='home-text'>
          <InfoText language={language} />
          <div className='info-btns'>
            <button><strong>Linkedin</strong></button>
            <button><strong>Github</strong></button>
            <button onClick={() => navigate('/contact')}>{language === 'Pt_br' ? <strong>Sobre</strong> : <strong>About</strong>}</button>
          </div>
          <SkillsImgs theme={theme} />
        </div>
        <div className='home-img'>
          <img src={picture} alt="myself" />
        </div>
      </div>
      <Projects language={language} theme={theme} />
    </div>
  );
}

export default Home;
