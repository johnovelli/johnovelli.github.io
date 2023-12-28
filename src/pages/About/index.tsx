import './about.css';

type AboutProps = {
  theme: string;
  language: string;
}

function About({ theme, language }: AboutProps) {
  return (
    <div className={`about-full about-full-${theme}`}>
      <div className={`about-div about-div-${theme}`}>

      </div>
    </div>
  );
}

export default About;
