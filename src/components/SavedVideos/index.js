import {Component} from 'react'
import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  SavedVideosContainer,
  BodyContainer,
  MainContainer,
  HeadingContainer,
  HeadingIcon,
  Heading,
  VideosList,
  SavedVideoItem,
  VideoLink,
  Thumbnail,
  VideoDetails,
  VideoTitle,
  ChannelName,
  VideoStats,
  NoSavedContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedText,
} from './styledComponents'

class SavedVideos extends Component {
  state = {
    videos: [],
    ownTheme: localStorage.getItem('isDark') === 'true',
  }

  componentDidMount() {
    this.loadSavedVideos()
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

  loadSavedVideos = () => {
    let savedVideos = []

    try {
      const data = JSON.parse(localStorage.getItem('savedVideos') || '[]')

      if (Array.isArray(data)) {
        savedVideos = data
      }
    } catch (error) {
      savedVideos = []
    }

    const normalizedVideos = savedVideos.map(video => {
      if (video.video_details) {
        return video.video_details
      }

      if (video.videoDetails) {
        return video.videoDetails
      }

      if (video.details) {
        return video.details
      }

      return video
    })

    this.setState({
      videos: normalizedVideos,
    })
  }

  renderSavedVideos = () => {
    const {videos} = this.state

    return (
      <VideosList>
        {videos.map(video => {
          const channel = video.channel || {}

          return (
            <SavedVideoItem key={video.id}>
              <VideoLink to={`/videos/${video.id}`}>
                <Thumbnail src={video.thumbnail_url} alt="video thumbnail" />

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
            </SavedVideoItem>
          )
        })}
      </VideosList>
    )
  }

  renderEmptyView = () => (
    <NoSavedContainer>
      <NoSavedImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />

      <NoSavedHeading>No saved videos found</NoSavedHeading>

      <NoSavedText>You can save your videos while watching them</NoSavedText>
    </NoSavedContainer>
  )

  render() {
    const {videos} = this.state
    const {isDark, changeTheme} = this.props
    const theme = this.getCurrentTheme()

    return (
      <SavedVideosContainer dark={theme}>
        <Header isDark={isDark} changeTheme={changeTheme || this.changeTheme} />

        <BodyContainer>
          <Sidebar isDark={theme} />

          <MainContainer>
            {videos.length === 0 ? (
              this.renderEmptyView()
            ) : (
              <>
                <HeadingContainer>
                  <HeadingIcon dark={theme}>
                    <BiListPlus />
                  </HeadingIcon>

                  <Heading dark={theme}>Saved Videos</Heading>
                </HeadingContainer>

                {this.renderSavedVideos()}
              </>
            )}
          </MainContainer>
        </BodyContainer>
      </SavedVideosContainer>
    )
  }
}

export default SavedVideos
