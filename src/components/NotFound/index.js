import {
  NotFoundContainer,
  NotFoundImage,
  Heading,
  Description,
} from './styledComponents'

const NotFound = props => {
  const {isDark} = props

  const imageUrl =
    isDark === true
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

  return (
    <NotFoundContainer dark={isDark}>
      <NotFoundImage src={imageUrl} alt="not found" />

      <Heading dark={isDark}>Page Not Found</Heading>

      <Description dark={isDark}>
        We are sorry, the page you requested could not be found.
      </Description>
    </NotFoundContainer>
  )
}

export default NotFound