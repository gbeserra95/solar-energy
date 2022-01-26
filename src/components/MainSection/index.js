import { DefaultMain, Title } from './styles'

function MainSection({ title, children }) {
  return (
    <DefaultMain>
      <Title>{title}</Title>
      {children}
    </DefaultMain>
  )
}

export default MainSection
