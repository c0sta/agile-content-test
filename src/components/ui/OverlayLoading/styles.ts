import styled from 'styled-components'

export const OverlayLoading = styled.div`
  position: fixed;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  p {
    font-size: 1.3em;
    text-align: center;
    color: #fafdfd;
    font-family: 'Nunito', sans-serif;
  }
`
