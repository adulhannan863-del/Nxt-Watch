import styled from 'styled-components'

export const FailureContainer = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 300px;
  max-width: 80%;
`

export const Heading = styled.h1`
  font-size: 24px;
`

export const Description = styled.p`
  color: #64748b;
`

export const RetryButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #3b82f6;
  color: #ffffff;
  cursor: pointer;
`
