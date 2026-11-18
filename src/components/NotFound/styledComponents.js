import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};

  font-family: Roboto, sans-serif;
  text-align: center;
`

export const NotFoundImage = styled.img`
  width: 340px;
  max-width: 80%;
  height: auto;
  display: block;

  @media screen and (max-width: 767px) {
    width: 280px;
  }
`

export const Heading = styled.h1`
  margin: 28px 0 10px;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-size: 24px;
  font-weight: 500;
`

export const Description = styled.p`
  max-width: 440px;
  margin: 0;
  color: ${props => (props.dark ? '#cccccc' : '#64748b')};
  font-size: 14px;
  line-height: 1.6;
`
