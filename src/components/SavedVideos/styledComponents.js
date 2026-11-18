import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVideosContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  font-family: Roboto, sans-serif;
`

export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
`

export const MainContainer = styled.main`
  flex: 1;
  min-width: 0;
  padding: 25px 30px 40px;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    padding: 20px 12px 30px;
  }
`

export const HeadingContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

export const HeadingIcon = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.dark ? '#383838' : '#e2e8f0')};
  color: #ff0000;

  svg {
    width: 28px;
    height: 28px;
  }
`

export const Heading = styled.h1`
  margin: 0;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-size: 24px;
  font-weight: 500;
`

export const VideosList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 15px;
  row-gap: 38px;

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
`

export const SavedVideoItem = styled.li`
  width: 100%;
  min-width: 0;
`

export const VideoLink = styled(Link)`
  width: 100%;
  display: block;
  color: inherit;
  text-decoration: none;
`

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`

export const VideoTitle = styled.p`
  margin: 0;
  color: inherit;
  font-size: 13px;
  line-height: 1.5;
`

export const ChannelName = styled.p`
  margin: 7px 0 0;
  color: #64748b;
  font-size: 11px;
  line-height: 1.4;
`

export const VideoStats = styled.p`
  margin: 5px 0 0;
  color: #64748b;
  font-size: 11px;
  line-height: 1.4;
`

export const NoSavedContainer = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const NoSavedImage = styled.img`
  width: 300px;
  max-width: 80%;
`

export const NoSavedHeading = styled.h1`
  margin: 25px 0 10px;
  color: inherit;
  font-size: 22px;
`

export const NoSavedText = styled.p`
  margin: 0;
  color: #64748b;
  font-size: 14px;
`
