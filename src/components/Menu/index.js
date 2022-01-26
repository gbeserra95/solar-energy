import Logo from '../Logo'
import MenuItem from '../MenuItem'

import { MenuContainer, List } from './styles'

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
    value: 'cadastro',
    text: 'Cadastro de energia gerada',
    icon: 'MdSettings'
  }
]

function Menu({ current }) {
  return (
    <MenuContainer>
      <Logo size="10rem" />
      <List>
        {MENU_OPTIONS.map(option => (
          <MenuItem key={option.value} current={current} props={option} />
        ))}
      </List>
    </MenuContainer>
  )
}

export default Menu
