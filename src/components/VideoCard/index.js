import {Link} from 'react-router-dom'

import {
  VideoCardContainer,
  Thumbnail,
  VideoDetailsContainer,
  ChannelLogo,
  VideoInfoContainer,
  VideoTitle,
  ChannelName,
  VideoStats,
} from './styledComponents'

const VideoCard = props => {
  const {video} = props

  const {
    id,
    title,
    thumbnail_url: thumbnailUrl,
    channel = {},
    view_count: viewCount,
    published_at: publishedAt,
  } = video

  const {
    name = '',
    profile_image_url: profileImageUrl = '',
  } = channel

  return (
    <li>
      <Link
        to={`/videos/${id}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <VideoCardContainer>
          <Thumbnail
            src={thumbnailUrl}
            alt="video thumbnail"
          />

          <VideoDetailsContainer>
            <ChannelLogo
              src={profileImageUrl}
              alt="channel logo"
            />

            <VideoInfoContainer>
              <VideoTitle>{title}</VideoTitle>

              <ChannelName>{name}</ChannelName>

              <VideoStats>
                {viewCount}
                {' views • '}
                {publishedAt}
              </VideoStats>
            </VideoInfoContainer>
          </VideoDetailsContainer>
        </VideoCardContainer>
      </Link>
    </li>
  )
}

export default VideoCard