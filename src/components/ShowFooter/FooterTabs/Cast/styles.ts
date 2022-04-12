import styled from 'styled-components'

export const CastTab = styled.div`
  width: 100%;
`

export const CastList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  overflow-x: auto;
  height: 100%;
  width: 100%;
  padding: 16px 8px;
`

export const CastListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  min-width: 200px;
  background: #212123;

  h1 {
    font-size: 1rem;
    color: #fafdfd;
  }
  h3 {
    font-size: 0.8rem;
    color: #aaa;
  }
`
