import React from 'react'

import { InputContainer, InputText } from './styles'

import { MdOutlineEmail, MdLockOutline } from 'react-icons/md'

function Input({ type, ...otherProps }) {
  return (
    <InputContainer>
      {type === 'email' ? (
        <MdOutlineEmail color="rgb(160, 152, 174)" size="36" />
      ) : (
        <MdLockOutline color="rgb(160, 152, 174)" size="36" />
      )}
      <InputText type={type} {...otherProps} />
    </InputContainer>
  )
}

export default Input
