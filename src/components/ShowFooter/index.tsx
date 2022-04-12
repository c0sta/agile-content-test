import Tabs from '../Tabs'
import * as SC from './styles'
import { General, Cast } from './FooterTabs'
import NoContent from '../NoContent'

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
    title: 'Principais Premios',
    content: <NoContent />,
  },
]
const ShowFooter: React.FC = () => (
  <SC.ShowFooter>
    <Tabs tabs={tabs} showIcon />
  </SC.ShowFooter>
)

export default ShowFooter
