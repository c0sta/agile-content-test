import styled from 'styled-components'

export const Tabs = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`
interface TabProps {
  active?: boolean
  align?: 'left' | 'center' | 'right'
  fullWidth?: boolean
  padding?: string
}

export const TabsHeader = styled.header<TabProps>`
  box-sizing: border-box;
  display: flex;
  gap: 32px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  height: 64px;
  /* border-bottom: 2px solid #aaa; */
`

export const Tab = styled.button<TabProps>`
  height: 100%;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  text-align: ${props => props.align || 'left'};
  background: none;
  border: none;
  border-bottom: ${props => (props.active ? '2px solid #2e754b' : '')};
  color: ${props => (props.active ? '#fafdfd' : '#aaa')};
  font-size: 1.3rem;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`
export const TabContent = styled.section<TabProps>`
  display: flex;
  padding: ${props => props.padding || '0px'};
  overflow-x: hidden;
  overflow-y: auto;
`
