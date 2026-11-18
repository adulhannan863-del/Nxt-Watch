import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GiConsoleController} from 'react-icons/gi'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  GamingContainer,
  BodyContainer,
  MainContainer,
  HeadingContainer,
  HeadingIcon,
  Heading,
  VideosList,
  GamingVideoItem,
  VideoLink,
  GamingImage,
  GamingTitle,
  GamingViews,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    videos: [],
    apiStatus: apiStatusConstants.initial,
    ownTheme: localStorage.getItem('isDark') === 'true',
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getCurrentTheme = () => {
    const {isDark} = this.props
    const {ownTheme} = this.state

    if (typeof isDark === 'boolean') {
      return isDark
    }

    return ownTheme
  }

  changeTheme = () => {
    const {changeTheme} = this.props

    if (changeTheme) {
      changeTheme()
      return
    }

    this.setState(prevState => {
      const newTheme = !prevState.ownTheme

      localStorage.setItem('isDark', String(newTheme))

      return {
        ownTheme: newTheme,
      }
    })
  }

  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    try {
      const response = await fetch(
        'https://apis.ccbp.in/videos/gaming',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        },
      )

      if (response.ok) {
        const data = await response.json()

        this.setState({
          videos: data.videos,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
      }
    } catch (error) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color="#ffffff"
        height={50}
        width={50}
      />
    </LoaderContainer>
  )

  renderVideos = () => {
    const {videos} = this.state

    return (
      <VideosList>
        {videos.map(video => (
          <GamingVideoItem key={video.id}>
            <VideoLink to={`/videos/${video.id}`}>
              <GamingImage
                src={video.thumbnail_url}
                alt="video thumbnail"
              />

              <GamingTitle>{video.title}</GamingTitle>

              <GamingViews>
                {video.view_count}
                {' views'}
              </GamingViews>
            </VideoLink>
          </GamingVideoItem>
        ))}
      </VideosList>
    )
  }

  renderFailure = () => {
    const isDark = this.getCurrentTheme()

    const imageUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailureContainer>
        <FailureImage src={imageUrl} alt="failure view" />

        <FailureHeading>
          Oops! Something Went Wrong
        </FailureHeading>

        <FailureText>We are having some trouble</FailureText>

        <RetryButton type="button" onClick={this.getGamingVideos}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  renderContent = () => {
    const {apiStatus} = this.state

    if (apiStatus === apiStatusConstants.inProgress) {
      return this.renderLoader()
    }

    if (apiStatus === apiStatusConstants.failure) {
      return this.renderFailure()
    }

    if (apiStatus === apiStatusConstants.success) {
      return this.renderVideos()
    }

    return null
  }

  render() {
    const {isDark, changeTheme} = this.props
    const theme = this.getCurrentTheme()

    return (
      <GamingContainer dark={theme}>
        <Header
          isDark={isDark}
          changeTheme={changeTheme || this.changeTheme}
        />

        <BodyContainer>
          <Sidebar isDark={theme} />

          <MainContainer>
            <HeadingContainer>
              <HeadingIcon dark={theme}>
                <GiConsoleController />
              </HeadingIcon>

              <Heading dark={theme}>Gaming</Heading>
            </HeadingContainer>

            {this.renderContent()}
          </MainContainer>
        </BodyContainer>
      </GamingContainer>
    )
  }
}

export default Gaming