import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  font-family: Roboto, sans-serif;
`

export const LoginCard = styled.form`
  width: 360px;
  padding: 38px 40px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 575px) {
    width: 90%;
    padding: 32px 28px;
  }
`

export const Logo = styled.img`
  width: 150px;
  height: auto;
  display: block;
  margin: 0 auto 48px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  color: #616e7c;
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
`

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 12px;
  margin-bottom: 21px;
  box-sizing: border-box;
  border: 1px solid #d7dfe9;
  border-radius: 2px;
  outline: none;
  background-color: #ffffff;
  color: #181818;
  font-family: Roboto, sans-serif;
  font-size: 11px;

  &::placeholder {
    color: #7e858e;
  }

  &:focus {
    border-color: #3b82f6;
  }
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -10px;
  margin-bottom: 29px;

  label {
    color: #181818;
    font-size: 11px;
    font-weight: 500;
  }
`

export const Checkbox = styled.input`
  width: 13px;
  height: 13px;
  margin: 0 7px 0 0;
  cursor: pointer;
`

export const LoginButton = styled.button`
  width: 100%;
  height: 33px;
  border: none;
  border-radius: 4px;
  background-color: #2b88e2;
  color: #ffffff;
  font-family: Roboto, sans-serif;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  margin: 10px 0 0;
  color: #ff0000;
  font-size: 11px;
  line-height: 1.4;
`
