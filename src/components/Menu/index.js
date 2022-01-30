// Link
import { Link } from 'react-router-dom'

// Components
import Logo from '../Logo'
import MenuItem from '../MenuItem'

// Styled-components
import { MenuContainer, List } from './styles'

// Menu options
const MENU_OPTIONS = [
  {
    value: 'dashboard',
    text: 'Dashboard',
    icon: 'MdPieChart'
  },
  {
    value: 'unidades',
    text: 'Unidade consumidora',
    icon: 'MdOutlineAreaChart'
  },
  {
    value: 'consumo',
    text: 'Lançamento de geração mensal',
    icon: 'MdSettings'
  }
]

function Menu({ current }) {
  return (
    <MenuContainer>
      <Logo size="10rem" />
      <List>
        {MENU_OPTIONS.map(option => (
          <Link key={option.value} to={`/${option.value}/`}>
            <MenuItem key={option.value} current={current} props={option} />
          </Link>
        ))}
      </List>
    </MenuContainer>
  )
}

export default Menu
