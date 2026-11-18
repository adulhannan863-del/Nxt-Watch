import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  TrendingContainer,
  BodyContainer,
  MainContainer,
  HeadingContainer,
  HeadingIcon,
  Heading,
  VideosList,
  TrendingVideoItem,
  VideoLink,
  Thumbnail,
  VideoDetails,
  VideoTitle,
  ChannelName,
  VideoStats,
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

class Trending extends Component {
  state = {
    videos: [],
    apiStatus: apiStatusConstants.initial,
    ownTheme: localStorage.getItem('isDark') === 'true',
  }

  componentDidMount() {
    this.getTrendingVideos()
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

  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    try {
      const response = await fetch(
        'https://apis.ccbp.in/videos/trending',
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

  renderVideos = () => {
    const {videos} = this.state

    return (
      <VideosList>
        {videos.map(video => {
          const channel = video.channel || {}

          return (
            <TrendingVideoItem key={video.id}>
              <VideoLink to={`/videos/${video.id}`}>
                <Thumbnail
                  src={video.thumbnail_url}
                  alt="video thumbnail"
                />

                <VideoDetails>
                  <VideoTitle>{video.title}</VideoTitle>

                  <ChannelName>{channel.name}</ChannelName>

                  <VideoStats>
                    {video.view_count}
                    {' views • '}
                    {video.published_at}
                  </VideoStats>
                </VideoDetails>
              </VideoLink>
            </TrendingVideoItem>
          )
        })}
      </VideosList>
    )
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

        <RetryButton
          type="button"
          onClick={this.getTrendingVideos}
        >
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
      <TrendingContainer dark={theme}>
        <Header
          isDark={isDark}
          changeTheme={changeTheme || this.changeTheme}
        />

        <BodyContainer>
          <Sidebar isDark={theme} />

          <MainContainer>
            <HeadingContainer>
              <HeadingIcon dark={theme}>
                <AiFillFire />
              </HeadingIcon>

              <Heading dark={theme}>Trending</Heading>
            </HeadingContainer>

            {this.renderContent()}
          </MainContainer>
        </BodyContainer>
      </TrendingContainer>
    )
  }
}

export default Trending
