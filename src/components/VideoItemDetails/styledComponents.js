import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  font-family: Roboto, sans-serif;
`

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
`

export const ContentContainer = styled.main`
  flex: 1;
  min-width: 0;
  padding: 28px 30px 40px;
  box-sizing: border-box;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};

  @media screen and (max-width: 767px) {
    padding: 20px 12px 30px;
  }
`

export const PlayerContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: #000000;

  @media screen and (max-width: 767px) {
    height: 250px;
  }
`

export const Title = styled.p`
  margin: 20px 0 0;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
`

export const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  @media screen and (max-width: 575px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
  }
`

export const ViewsText = styled.p`
  margin: 0;
  color: ${props => (props.dark ? '#cccccc' : '#64748b')};
  font-size: 13px;
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ActionButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
`

export const Line = styled.hr`
  margin: 20px 0 0;
  border: none;
  border-top: 1px solid #d7dfe9;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 22px;
`

export const ChannelLogo = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`

export const ChannelDetails = styled.div`
  margin-left: 15px;
`

export const ChannelName = styled.p`
  margin: 0;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-size: 15px;
  font-weight: 500;
`

export const Subscribers = styled.p`
  margin: 6px 0 0;
  color: ${props => (props.dark ? '#cccccc' : '#64748b')};
  font-size: 12px;
`

export const Description = styled.p`
  margin: 20px 0 0;
  color: ${props => (props.dark ? '#cccccc' : '#181818')};
  font-size: 13px;
  line-height: 1.7;
`

export const LoaderContainer = styled.div`
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FailureContainer = styled.div`
  min-height: 500px;
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
