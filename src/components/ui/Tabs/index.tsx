import { useState } from 'react'
import LogoTelecineIcon from '../../../assets/icons/logo-telecine.svg'
import NoContent from '../NoContent'
import * as SC from './styles'

interface Tab {
  title: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  showIcon?: boolean
}

const Tabs: React.FC<TabsProps> = ({ tabs, showIcon }) => {
  const [activeTab, setActiveTab] = useState(0)
  if (!tabs.length) return <NoContent />
  return (
    <SC.Tabs>
      <SC.TabsHeader>
        {tabs.map((tab, index) => (
          <SC.Tab
            key={tab.title}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.title.toUpperCase()}
          </SC.Tab>
        ))}
        {showIcon && (
          <SC.Tab align="right" fullWidth>
            <img
              src={LogoTelecineIcon}
              alt="Telecine logo na cor branco"
              height={45}
              width={45}
            />
          </SC.Tab>
        )}
      </SC.TabsHeader>
      <SC.TabContent>{tabs[activeTab].content}</SC.TabContent>
    </SC.Tabs>
  )
}

export default Tabs
