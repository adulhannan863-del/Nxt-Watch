import {Component} from 'react'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FiSun, FiMoon} from 'react-icons/fi'
import {withRouter} from 'react-router-dom'

import {
  HeaderContainer,
  LogoLink,
  Logo,
  RightContainer,
  IconButton,
  ProfileImage,
  LogoutButton,
  PopupContainer,
  PopupText,
  PopupButtonContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

class Header extends Component {
  logout = () => {
    const {history} = this.props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  renderPopupContent = close => {
    const {isDark} = this.props

    return (
      <PopupContainer dark={isDark}>
        <PopupText>Are you sure, you want to logout</PopupText>

        <PopupButtonContainer>
          <CancelButton type="button" onClick={close}>
            Cancel
          </CancelButton>

          <ConfirmButton type="button" onClick={this.logout}>
            Confirm
          </ConfirmButton>
        </PopupButtonContainer>
      </PopupContainer>
    )
  }

  render() {
    const {isDark, changeTheme} = this.props

    const logoUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      <HeaderContainer dark={isDark}>
        <LogoLink to="/">
          <Logo src={logoUrl} alt="website logo" />
        </LogoLink>

        <RightContainer>
          <IconButton
            type="button"
            data-testid="theme"
            onClick={changeTheme}
            dark={isDark}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </IconButton>

          <ProfileImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />

          <Popup
            modal
            trigger={<LogoutButton type="button">Logout</LogoutButton>}
          >
            {this.renderPopupContent}
          </Popup>
        </RightContainer>
      </HeaderContainer>
    )
  }
}

export default withRouter(Header)
