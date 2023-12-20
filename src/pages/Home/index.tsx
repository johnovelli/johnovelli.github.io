import './home.css';
import picture from '../../assets/joh_picture.jpg'

type HomeProps = {
  theme: string;
  language: string;
}

function Home({ theme, language }: HomeProps) {
  return (
    <div className={`home-full-${theme}`}>
      <div className={`home-div home-div-${theme}`}>
        <div className='home-text'>
          {language === 'Pt_br' ? (
            <>
              <h1>Bem vindo!</h1>
              <strong>Me chamo George Novelli Tarlazis, sou Desenvolvedor Front-End Jr,</strong>
              <strong>iniciando nessa area que sempre admirei e tive vontade aprender, formado em front-end na escola Trybe.
                Apaixonado por codigo, resolucao de problemas e aprender. Vim de um ramo aonde o trabalho em equipe, cooperacao
                e comunicacao eram as pecas chaves, tornando o trabalho em grupo prazeroso e natural para mim, sendo esse meu ponto forte.
              </strong>
            </>
          ) : (
            <>
              <h1>Bem vindo!</h1>
              <strong>Me chamo George Novelli Tarlazis, sou Desenvolvedor Front-End Jr,</strong>
              <strong>iniciando nessa area que sempre admirei e tive vontade aprender, formado em front-end na escola Trybe.
                Apaixonado por codigo, resolucao de problemas e aprender. Vim de um ramo aonde o trabalho em equipe, cooperacao
                e comunicacao eram as pecas chaves, tornando o trabalho em grupo prazeroso e natural para mim, sendo esse meu ponto forte.
              </strong>
            </>
          )}
        </div>
        <div className='home-img'>
          <img src={picture} alt="myself" />
        </div>
      </div>
    </div>
  );
}

export default Home;
