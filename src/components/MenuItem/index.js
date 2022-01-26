import React from 'react'

import { ItemContainer } from './styles'
import { MdPieChart, MdOutlineAreaChart, MdSettings } from 'react-icons/md'

function MenuItem({ current, props }) {
  return (
    <ItemContainer
      bg={current === props.value ? 'rgba(76, 188, 154, 1)' : '#FBF4F4'}
      color={current === props.value ? '#FBF4F4' : 'rgba(160, 152, 174, 1)'}
    >
      {props.value === 'dashboard' ? (
        <MdPieChart size="36" />
      ) : props.value === 'unidade' ? (
        <MdOutlineAreaChart size="48" />
      ) : (
        <MdSettings size="48" />
      )}
      <div>{props.text}</div>
    </ItemContainer>
  )
}

export default MenuItem

/*
const MENU_OPTIONS = [
  {
    "value": "dashboard",
    "text": "Dashboard",
    "icon": "MdPieChart"
  },
    {
    "value": "unidade",
    "text": "Unidade consumidora",
    "icon": "MdOutlineAreaChart"
  },
    {
    "value": "cadastro",
    "text": "Cadastro de energia gerada",
    "icon": "MdSettings"
  },
]

*/
