import Tabs from '../ui/Tabs'
import * as SC from './styles'
import { General, Cast } from './FooterTabs'
import NoContent from '../ui/NoContent'

const tabs = [
  {
    title: 'General',
    content: <General />,
  },
  {
    title: 'Elenco',
    content: <Cast />,
  },
  {
    title: 'Premios principais',
    content: <NoContent />,
  },
]
const ShowFooter: React.FC = () => (
  <SC.ShowFooter>
    <Tabs tabs={tabs} showIcon padding="32px 0px" />
  </SC.ShowFooter>
)

export default ShowFooter
