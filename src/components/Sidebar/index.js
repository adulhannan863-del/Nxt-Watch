import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {withRouter} from 'react-router-dom'

import {
  SidebarContainer,
  NavList,
  NavItem,
  NavIcon,
  NavText,
  ContactContainer,
  ContactText,
  SocialContainer,
  SocialImage,
} from './styledComponents'

const Sidebar = props => {
  const {isDark, location} = props
  const currentPath = location.pathname

  return (
    <SidebarContainer dark={isDark}>
      <NavList>
        <li>
          <NavItem to='/' active={currentPath === '/'} dark={isDark}>
            <NavIcon active={currentPath === '/'}>
              <AiFillHome />
            </NavIcon>
            <NavText dark={isDark}>Home</NavText>
          </NavItem>
        </li>

        <li>
          <NavItem
            to='/trending'
            active={currentPath === '/trending'}
            dark={isDark}
          >
            <NavIcon active={currentPath === '/trending'}>
              <AiFillFire />
            </NavIcon>
            <NavText dark={isDark}>Trending</NavText>
          </NavItem>
        </li>

        <li>
          <NavItem
            to='/gaming'
            active={currentPath === '/gaming'}
            dark={isDark}
          >
            <NavIcon active={currentPath === '/gaming'}>
              <SiYoutubegaming />
            </NavIcon>
            <NavText dark={isDark}>Gaming</NavText>
          </NavItem>
        </li>

        <li>
          <NavItem
            to='/saved-videos'
            active={currentPath === '/saved-videos'}
            dark={isDark}
          >
            <NavIcon active={currentPath === '/saved-videos'}>
              <BiListPlus />
            </NavIcon>
            <NavText dark={isDark}>Saved videos</NavText>
          </NavItem>
        </li>
      </NavList>

      <ContactContainer dark={isDark}>
        <ContactText dark={isDark}>CONTACT US</ContactText>

        <SocialContainer>
          <SocialImage
            src='https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png'
            alt='facebook logo'
          />

          <SocialImage
            src='https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png'
            alt='twitter logo'
          />

          <SocialImage
            src='https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png'
            alt='linked in logo'
          />
        </SocialContainer>

        <ContactText dark={isDark}>
          Enjoy! Now to see your channels and recommendations!
        </ContactText>
      </ContactContainer>
    </SidebarContainer>
  )
}

export default withRouter(Sidebar)
