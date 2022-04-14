import styled from 'styled-components'

export const ShowSeasonsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 500px;
  padding: 0px 8px;
`

export const ShowSeasonsItem = styled.li`
  width: 100%;
`

export const EpisodeDropdown = styled.details`
  width: 100%;

  cursor: pointer;
`

export const EpisodeTitleContainer = styled.summary`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0px;

  border-bottom: 1px solid #4f4f4f;
`

export const EpisodeTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fafdfd;
  p {
    font-size: 1rem;
    margin-right: 16px;
  }
`

export const EpisodeDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
`
