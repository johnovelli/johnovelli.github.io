type InfoTextType = {
  language: string;
}

function InfoText({ language }: InfoTextType) {
  return (
    <>
      {language === 'Pt_br' ? (
        <div>
          <h1>Ola, seja bem-vindo!</h1>
          <p>
            <strong>Meu nome eh George Novelli Tarlazis, sou Desenvolvedor Front-End Jr formado pela Trybe. </strong>
            <strong>
              Minha paixão por código, resolução de problemas e constante aprendizado impulsionam minha jornada nessa área que sempre admirei.
            </strong>
          </p>
          <p>
            <strong>
              Vim de um ramo onde o trabalho em equipe, cooperação e comunicação eram fundamentais. Trago essa experiência como meu ponto forte.
            </strong>
          </p>
        </div>
      ) : (
        <div>
          <h1>Hello, welcome!</h1>
          <p>
            <strong>My name is George Novelli Tarlazis, and I am a Junior Front-End Developer graduated from Trybe.</strong>
            <strong>
              My passion for code, problem-solving, and continuous learning drives my journey in this field that I have always admired.
            </strong>
          </p>
          <p>
            <strong>
              I come from a background where teamwork, cooperation, and communication were fundamental. I bring this experience as my strength.
            </strong>
          </p>
        </div>
      )}
    </>
  );
}

export default InfoText;

