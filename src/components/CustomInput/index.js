import { CustomContainer, Input, IconContainer } from './styles'
import { MdCalendarToday } from 'react-icons/md'

function CustomInput({ ...otherProps }) {
  return (
    <CustomContainer>
      <Input {...otherProps} />
      <IconContainer>
        <MdCalendarToday color="rgb(160, 152, 174)" size="24" />
      </IconContainer>
    </CustomContainer>
  )
}

export default CustomInput
