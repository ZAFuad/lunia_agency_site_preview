import Logo from '../../assets/images/Logo.svg' 

export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className}  title-logo`}>
      {title}
    </h1>
  )
}

export const TitleSm = ({ title }) => {
  return <h1 className='titleSm'>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>
}
