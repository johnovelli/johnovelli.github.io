import projectList from '../../content/projectList';
import './projects-div.css';

type ProjectsType = {
  language: string;
  theme: string;
}

function Projects({ language, theme }: ProjectsType) {
  return (
    <div className={`projects projects-${theme}`}>
      {language === 'Pt_br' ? <h1>Projetos</h1> : <h1>Projects</h1>}
      <div className={`projects-div projects-div-${theme}`}>
        {projectList.map((project) => (
          <div className={`project-div project-div-${theme}`} key={project.id}>
            <strong>{project.name}</strong>
            <img src={project.img} alt="" />
            <div className='app-desc'>
              {language === 'Pt_br' ? <span>{project.description_Pt}</span> : <span>{project.description_En}</span>}
            </div>
            <div className='project-btns'>
              <button><strong>Website</strong></button>
              <button><strong>Github</strong></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
