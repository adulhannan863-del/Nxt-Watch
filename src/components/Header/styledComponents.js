import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.nav`
  height: 64px;
  width: 100%;
  padding: 0 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  box-sizing: border-box;
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const Logo = styled.img`
  width: 90px;
  height: auto;
  display: block;
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`

export const IconButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 21px;
    height: 21px;
  }
`

export const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: block;
`

export const LogoutButton = styled.button`
  min-width: 68px;
  height: 25px;
  padding: 0 10px;
  border: 1px solid #4f46e5;
  background-color: transparent;
  color: #4f46e5;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`

export const PopupContainer = styled.div`
  width: 320px;
  padding: 30px;
  box-sizing: border-box;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  text-align: center;
`

export const PopupText = styled.p`
  margin: 0 0 25px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
`

export const PopupButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

export const CancelButton = styled.button`
  min-width: 80px;
  height: 32px;
  padding: 0 15px;
  border: 1px solid #64748b;
  background-color: transparent;
  color: #64748b;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  min-width: 80px;
  height: 32px;
  padding: 0 15px;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  cursor: pointer;
`
