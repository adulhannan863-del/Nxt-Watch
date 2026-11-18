import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.aside`
  width: 220px;
  min-height: calc(100vh - 64px);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};

  @media screen and (max-width: 767px) {
    width: 70px;
  }
`

export const NavList = styled.ul`
  margin: 20px 0 0;
  padding: 0;
  list-style-type: none;
`

export const NavItem = styled(Link)`
  width: 100%;
  min-height: 40px;
  padding: 0 22px;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  text-decoration: none;

  background-color: ${props => {
    if (props.active) {
      return props.dark ? '#383838' : '#f1f5f9'
    }

    return 'transparent'
  }};

  @media screen and (max-width: 767px) {
    justify-content: center;
    padding: 0;
  }
`

export const NavIcon = styled.div`
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  color: ${props => (props.active ? '#ff0000' : '#64748b')};

  font-size: 18px;
`

export const NavText = styled.p`
  margin: 0 0 0 16px;

  color: ${props => (props.dark ? '#ffffff' : '#181818')};

  font-family: Roboto, sans-serif;
  font-size: 14px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ContactContainer = styled.div`
  padding: 0 22px 28px;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ContactText = styled.p`
  margin: 0;

  color: ${props => (props.dark ? '#ffffff' : '#475569')};

  font-family: Roboto, sans-serif;
  font-size: 13px;
  line-height: 1.5;
`

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px 0;
`

export const SocialImage = styled.img`
  width: 28px;
  height: 28px;
  display: block;
`
