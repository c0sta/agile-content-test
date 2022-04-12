import styled from 'styled-components'

export const Tabs = styled.nav`
  display: flex;
  flex-direction: column;
  /* margin: 16px 64px; */
  width: 100%;
`
interface TabProps {
  active?: boolean
  align?: 'left' | 'center' | 'right'
}

export const TabsHeader = styled.header<TabProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  height: 64px;
  padding: 8px 0px;
`

export const Tab = styled.button<TabProps>`
  width: 100%;
  text-align: ${props => props.align || 'left'};
  background: none;
  border: none;
  border-bottom: ${props =>
    props.active ? '2px solid #2e754b' : '2px solid #aaa'};
  color: ${props => (props.active ? '#fafdfd' : '#aaa')};
  font-size: 1.3rem;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`

export const TabContent = styled.section`
  display: flex;
  padding: 32px 0px;
`
