import styled from 'styled-components'

export const General = styled.section`
  display: flex;
  width: 100%;
`
export const Actions = styled.section`
  display: flex;
  width: 40%;
  justify-content: flex-start;
  gap: 32px;
  flex-wrap: wrap;
`
export const Action = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: space-evenly;
  height: 4rem;
  width: 6rem;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`
export const ActionIcon = styled.img`
  height: 30px;
  width: 30px;
`

export const ActionLabel = styled.span`
  font-size: 1rem;
  color: #aaa;
`

export const Synopsis = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 0px 32px;
  color: #fafdfd;

  h3 {
    font-size: 1.3rem;
  }
  p {
    font-size: 0.9rem;
  }
`
