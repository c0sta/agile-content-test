import Tabs from '../Tabs'
import * as SC from './styles'
import { General, Cast } from './FooterTabs'

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
    content: <div>Premios</div>,
  },
]
const ShowFooter: React.FC = () => (
  <SC.ShowFooter>
    <Tabs tabs={tabs} showIcon />
  </SC.ShowFooter>
)

export default ShowFooter
