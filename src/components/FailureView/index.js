import {
  FailureContainer,
  FailureImage,
  Heading,
  Description,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {isDark, retry} = props

  const imageUrl = isDark
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

  return (
    <FailureContainer>
      <FailureImage src={imageUrl} alt="failure view" />

      <Heading>Oops! Something Went Wrong</Heading>

      <Description>
        We are having some trouble to complete your request. Please try again.
      </Description>

      <RetryButton type="button" onClick={retry}>
        Retry
      </RetryButton>
    </FailureContainer>
  )
}

export default FailureView
