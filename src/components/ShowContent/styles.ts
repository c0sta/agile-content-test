import styled from 'styled-components'

interface ShowContentProps {
  backgroundUrl: string
}

export const ShowContent = styled.div<ShowContentProps>`
  display: grid;
  grid-template-columns: 70% 30%;
  background-color: aliceblue;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0)
    ),
    linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url(${props => props.backgroundUrl}) no-repeat center fixed;
  background-size: cover;
`
export const ShowContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 32px 64px;
`

export const ShowContentHeaderTitle = styled.h1`
  font-size: 3.5rem;
  font-family: 'Nunito', sans-serif;
  font-weight: bolder;
  color: #fafdfd;
  line-height: 0.9;
`

export const ShowContentHeaderDescription = styled.h3`
  font-size: 1.3rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  color: #aaa;
`
