import styled from 'styled-components'
import myLogo from '../../assets/images/Logo.svg'

export const LogoContainer = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  background-image: url(${myLogo});
  background-size: contain;
  background-repeat: no-repeat;
`
