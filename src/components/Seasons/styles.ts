import styled from 'styled-components'

export const Seasons = styled.nav`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0)
  );
`
export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`
export const SeasonsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 32px;
`

export const SeasonsBody = styled.div``
