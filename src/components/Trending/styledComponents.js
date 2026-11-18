import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingContainer = styled.div`
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
  height: 85px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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
    width: 25px;
    height: 25px;
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
`

export const TrendingVideoItem = styled.li`
  width: 100%;
  margin-bottom: 30px;
`

export const VideoLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  color: inherit;

  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`

export const Thumbnail = styled.img`
  width: 300px;
  height: 170px;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
  margin-right: 20px;

  @media screen and (max-width: 575px) {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 12px;
  }
`

export const VideoDetails = styled.div`
  flex: 1;
  min-width: 0;
  padding-top: 3px;
`

export const VideoTitle = styled.p`
  margin: 0 0 14px;
  color: inherit;
  font-size: 16px;
  line-height: 1.6;
`

export const ChannelName = styled.p`
  margin: 0 0 8px;
  color: #64748b;
  font-size: 13px;
  line-height: 1.4;
`

export const VideoStats = styled.p`
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.4;
`

export const LoaderContainer = styled.div`
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FailureContainer = styled.div`
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 300px;
  max-width: 80%;
`

export const FailureHeading = styled.h1`
  margin: 25px 0 10px;
  color: inherit;
  font-size: 22px;
`

export const FailureText = styled.p`
  margin: 0;
  color: #64748b;
  font-size: 14px;
`

export const RetryButton = styled.button`
  min-width: 80px;
  height: 34px;
  margin-top: 20px;
  border: none;
  border-radius: 3px;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  cursor: pointer;
`
