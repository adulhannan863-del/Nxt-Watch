import styled from 'styled-components'

export const VideoCardContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 10px;
`

export const ChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`

export const VideoInfoContainer = styled.div`
  flex: 1;
  min-width: 0;
  padding-left: 10px;
`

export const VideoTitle = styled.p`
  margin: 0;
  color: #181818;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
`

export const ChannelName = styled.p`
  margin: 7px 0 0;
  color: #616e7c;
  font-family: Roboto, sans-serif;
  font-size: 11px;
  line-height: 1.4;
`

export const VideoStats = styled.p`
  margin: 5px 0 0;
  color: #616e7c;
  font-family: Roboto, sans-serif;
  font-size: 11px;
  line-height: 1.4;
`