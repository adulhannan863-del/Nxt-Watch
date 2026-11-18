import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
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
  padding: 0 18px 40px;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    padding: 0 12px 30px;
  }
`

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 170px;
  padding: 25px 20px;
  box-sizing: border-box;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const BannerLogo = styled.img`
  width: 112px;
  height: auto;
  display: block;
  margin-bottom: 10px;
`

export const BannerText = styled.p`
  width: 300px;
  margin: 0;
  color: #231f20;
  font-size: 14px;
  line-height: 1.6;

  @media screen and (max-width: 767px) {
    width: 230px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 18px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: #231f20;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  width: 355px;
  height: 34px;
  display: flex;
  margin: 22px 0;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const SearchInput = styled.input`
  flex: 1;
  height: 34px;
  padding: 0 12px;
  border: 1px solid #cbd5e1;
  border-right: none;
  outline: none;
  box-sizing: border-box;
  background-color: #ffffff;
  color: #0f0f0f;
  font-family: Roboto, sans-serif;
  font-size: 12px;

  &::placeholder {
    color: #7e858e;
  }
`

export const SearchButton = styled.button`
  width: 55px;
  height: 34px;
  padding: 0;
  border: 1px solid #cbd5e1;
  background-color: #f1f1f1;
  color: #606060;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  cursor: pointer;
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

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
`

export const VideoItem = styled.li`
  width: 100%;
  min-width: 0;
`

export const VideoLink = styled(Link)`
  width: 100%;
  display: block;
  color: inherit;
  text-decoration: none;
`

export const VideoThumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
`

export const VideoDetails = styled.div`
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

export const TextContainer = styled.div`
  min-width: 0;
  padding-left: 10px;
`

export const VideoTitle = styled.p`
  margin: 0;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-size: 13px;
  line-height: 1.5;
`

export const ChannelName = styled.p`
  margin: 7px 0 0;
  color: #616e7c;
  font-size: 11px;
  line-height: 1.4;
`

export const MetaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 5px;
`

export const MetaText = styled.p`
  margin: 0;
  color: #616e7c;
  font-size: 11px;
`

export const Dot = styled.span`
  color: #616e7c;
  font-size: 11px;
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

export const NoVideosContainer = styled.div`
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const NoVideosImage = styled.img`
  width: 280px;
  max-width: 80%;
`

export const NoVideosHeading = styled.h1`
  margin: 25px 0 10px;
  font-size: 22px;
`

export const NoVideosText = styled.p`
  margin: 0;
  color: #64748b;
  font-size: 14px;
`