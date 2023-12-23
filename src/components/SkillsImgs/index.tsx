import html_logo from '../../assets/html.png'
import css_logo from '../../assets/css.png'
import js_logo from '../../assets/js.png'
import react_logo from '../../assets/react.png'
import html_logo_dark from '../../assets/html2.png'
import css_logo_dark from '../../assets/css2.png'
import js_logo_dark from '../../assets/js2.png'

type SkillsImgsType = {
  theme: string;
}

function SkillsImgs({ theme }: SkillsImgsType) {
  return (
    <div className='tools'>
      <img className='skill' src={theme === 'Light' ? html_logo : html_logo_dark} alt="" />
      <img className='skill' src={theme === 'Light' ? css_logo : css_logo_dark} alt="" />
      <img className='skill' src={theme === 'Light' ? js_logo : js_logo_dark} alt="" />
      <img className='react' src={react_logo} alt="" />
    </div>
  )
}

export default SkillsImgs;