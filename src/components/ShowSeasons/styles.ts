import styled from 'styled-components'

export const ShowSeasons = styled.nav`
  height: 100%;
  overflow-y: auto;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0)
  );
`
export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`
export const ShowSeasonsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 32px;
  width: auto;
`

export const ShowSeasonsBody = styled.div`
  display: flex;
  width: 50%;
`
