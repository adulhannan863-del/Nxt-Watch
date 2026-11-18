import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  PageContainer,
  MainContainer,
  ContentContainer,
  PlayerContainer,
  Title,
  DetailsRow,
  ViewsText,
  ActionContainer,
  ActionButton,
  Line,
  ChannelContainer,
  ChannelLogo,
  ChannelDetails,
  ChannelName,
  Subscribers,
  Description,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
} from './styledComponents'

class VideoItemDetails extends Component {
  state = {
    video: null,
    isLoading: true,
    isFailure: false,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
    ownTheme: localStorage.getItem('isDark') === 'true',
  }

  componentDidMount() {
    this.getVideoDetails()
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

  getSavedVideos = () => {
    let savedVideos = []

    try {
      const savedVideosData = JSON.parse(
        localStorage.getItem('savedVideos') || '[]',
      )

      const savedVideosListData = JSON.parse(
        localStorage.getItem('savedVideosList') || '[]',
      )

      if (Array.isArray(savedVideosData) && savedVideosData.length > 0) {
        savedVideos = savedVideosData
      } else if (Array.isArray(savedVideosListData)) {
        savedVideos = savedVideosListData
      }
    } catch (error) {
      savedVideos = []
    }

    return savedVideos
  }

  getCleanVideos = videos =>
    videos.map(eachVideo => {
      if (eachVideo.video_details) {
        return eachVideo.video_details
      }

      if (eachVideo.videoDetails) {
        return eachVideo.videoDetails
      }

      if (eachVideo.details) {
        return eachVideo.details
      }

      return eachVideo
    })

  getVideoDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')

    this.setState({
      isLoading: true,
      isFailure: false,
    })

    try {
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        const savedVideos = this.getSavedVideos()
        const cleanVideos = this.getCleanVideos(savedVideos)
        const videoDetails = data.video_details

        const isSaved = cleanVideos.some(
          eachVideo => eachVideo.id === videoDetails.id,
        )

        this.setState({
          video: videoDetails,
          isLoading: false,
          isFailure: false,
          isSaved,
        })
      } else {
        this.setState({
          isLoading: false,
          isFailure: true,
        })
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        isFailure: true,
      })
    }
  }

  likeVideo = () => {
    this.setState({
      isLiked: true,
      isDisliked: false,
    })
  }

  dislikeVideo = () => {
    this.setState({
      isLiked: false,
      isDisliked: true,
    })
  }

  saveVideo = () => {
    const {video, isSaved} = this.state

    if (!video) {
      return
    }

    const savedVideos = this.getSavedVideos()
    const cleanVideos = this.getCleanVideos(savedVideos)

    if (isSaved) {
      const updatedVideos = cleanVideos.filter(
        eachVideo => eachVideo.id !== video.id,
      )

      localStorage.setItem('savedVideos', JSON.stringify(updatedVideos))

      localStorage.setItem('savedVideosList', JSON.stringify(updatedVideos))

      this.setState({
        isSaved: false,
      })

      return
    }

    const alreadyExists = cleanVideos.some(
      eachVideo => eachVideo.id === video.id,
    )

    const updatedVideos = alreadyExists ? cleanVideos : [...cleanVideos, video]

    localStorage.setItem('savedVideos', JSON.stringify(updatedVideos))

    localStorage.setItem('savedVideosList', JSON.stringify(updatedVideos))

    this.setState({
      isSaved: true,
    })
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
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

        <FailureHeading>Oops! Something Went Wrong</FailureHeading>

        <FailureText>We are having some trouble</FailureText>

        <RetryButton type="button" onClick={this.getVideoDetails}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  renderVideo = () => {
    const {video, isLiked, isDisliked, isSaved} = this.state
    const isDark = this.getCurrentTheme()

    if (!video) {
      return null
    }

    return (
      <>
        <PlayerContainer>
          <ReactPlayer
            url={video.video_url}
            controls
            width="100%"
            height="100%"
          />
        </PlayerContainer>

        <Title dark={isDark}>{video.title}</Title>

        <DetailsRow>
          <ViewsText dark={isDark}>
            {video.view_count}
            {' • '}
            {video.published_at}
          </ViewsText>

          <ActionContainer>
            <ActionButton
              type="button"
              active={isLiked}
              onClick={this.likeVideo}
            >
              <AiOutlineLike />
              <span>Like</span>
            </ActionButton>

            <ActionButton
              type="button"
              active={isDisliked}
              onClick={this.dislikeVideo}
            >
              <AiOutlineDislike />
              <span>Dislike</span>
            </ActionButton>

            <ActionButton
              type="button"
              active={isSaved}
              onClick={this.saveVideo}
            >
              <BiListPlus />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </ActionButton>
          </ActionContainer>
        </DetailsRow>

        <Line />

        <ChannelContainer>
          <ChannelLogo
            src={video.channel.profile_image_url}
            alt="channel logo"
          />

          <ChannelDetails>
            <ChannelName dark={isDark}>{video.channel.name}</ChannelName>

            <Subscribers dark={isDark}>
              {video.channel.subscriber_count}
            </Subscribers>
          </ChannelDetails>
        </ChannelContainer>

        <Description dark={isDark}>{video.description}</Description>
      </>
    )
  }

  render() {
    const {isLoading, isFailure} = this.state
    const {isDark, changeTheme} = this.props
    const theme = this.getCurrentTheme()

    return (
      <PageContainer dark={theme}>
        <Header isDark={isDark} changeTheme={changeTheme || this.changeTheme} />

        <MainContainer>
          <Sidebar isDark={theme} />

          <ContentContainer dark={theme}>
            {isLoading && this.renderLoader()}

            {!isLoading && isFailure && this.renderFailure()}

            {!isLoading && !isFailure && this.renderVideo()}
          </ContentContainer>
        </MainContainer>
      </PageContainer>
    )
  }
}

export default VideoItemDetails
