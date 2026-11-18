import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  HomeContainer,
  BodyContainer,
  MainContainer,
  Banner,
  BannerLogo,
  BannerText,
  CloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosList,
  VideoItem,
  VideoLink,
  VideoThumbnail,
  VideoDetails,
  ChannelLogo,
  TextContainer,
  VideoTitle,
  ChannelName,
  MetaContainer,
  MetaText,
  Dot,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosText,
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

class Home extends Component {
  state = {
    searchInput: '',
    videos: [],
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
    ownTheme: localStorage.getItem('isDark') === 'true',
  }

  componentDidMount() {
    this.getVideos()
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

  getVideos = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    try {
      const response = await fetch(
        `https://apis.ccbp.in/videos/all?search=${searchInput}`,
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

  changeSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  closeBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  renderBanner = () => {
    const {showBanner} = this.state

    if (!showBanner) {
      return null
    }

    return (
      <Banner data-testid="banner">
        <CloseButton
          type="button"
          data-testid="close"
          onClick={this.closeBanner}
          aria-label="close"
        >
          ×
        </CloseButton>

        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />

        <BannerText>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerText>

        <button type="button">GET IT NOW</button>
      </Banner>
    )
  }

  renderSearch = () => {
    const {searchInput} = this.state

    return (
      <SearchContainer>
        <SearchInput
          type="search"
          value={searchInput}
          onChange={this.changeSearch}
          placeholder="Search"
        />

        <SearchButton
          type="button"
          data-testid="searchButton"
          onClick={this.getVideos}
          aria-label="search"
        >
          Search
        </SearchButton>
      </SearchContainer>
    )
  }

  renderVideos = () => {
    const {videos} = this.state
    const isDark = this.getCurrentTheme()

    return (
      <VideosList>
        {videos.map(video => {
          const channel = video.channel || {}

          return (
            <VideoItem key={video.id}>
              <VideoLink to={`/videos/${video.id}`}>
                <VideoThumbnail
                  src={video.thumbnail_url}
                  alt="video thumbnail"
                />

                <VideoDetails>
                  <ChannelLogo
                    src={channel.profile_image_url}
                    alt="channel logo"
                  />

                  <TextContainer>
                    <VideoTitle dark={isDark}>
                      {video.title}
                    </VideoTitle>

                    <ChannelName>{channel.name}</ChannelName>

                    <MetaContainer>
                      <MetaText>{video.view_count}</MetaText>
                      <Dot>•</Dot>
                      <MetaText>{video.published_at}</MetaText>
                    </MetaContainer>
                  </TextContainer>
                </VideoDetails>
              </VideoLink>
            </VideoItem>
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

        <RetryButton type="button" onClick={this.getVideos}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  renderNoVideos = () => (
    <NoVideosContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />

      <NoVideosHeading>No Search results found</NoVideosHeading>

      <NoVideosText>
        Try different key words or remove search filter
      </NoVideosText>

      <RetryButton type="button" onClick={this.getVideos}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

  renderContent = () => {
    const {apiStatus, videos} = this.state

    if (apiStatus === apiStatusConstants.inProgress) {
      return this.renderLoader()
    }

    if (apiStatus === apiStatusConstants.failure) {
      return this.renderFailure()
    }

    if (
      apiStatus === apiStatusConstants.success &&
      videos.length === 0
    ) {
      return this.renderNoVideos()
    }

    if (
      apiStatus === apiStatusConstants.success &&
      videos.length > 0
    ) {
      return this.renderVideos()
    }

    return null
  }

  render() {
    const {isDark, changeTheme} = this.props
    const theme = this.getCurrentTheme()

    return (
      <HomeContainer data-testid="home" dark={theme}>
        <Header
          isDark={isDark}
          changeTheme={changeTheme || this.changeTheme}
        />

        <BodyContainer>
          <Sidebar isDark={theme} />

          <MainContainer>
            {this.renderBanner()}

            {this.renderSearch()}

            {this.renderContent()}
          </MainContainer>
        </BodyContainer>
      </HomeContainer>
    )
  }
}

export default Home