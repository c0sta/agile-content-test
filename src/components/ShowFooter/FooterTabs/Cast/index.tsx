import { useContext } from 'react'
import { ShowContext } from '../../../../context/show-context'
import * as SC from './styles'

const CastTab: React.FC = () => {
  const { show } = useContext(ShowContext)
  return (
    <SC.CastTab>
      <SC.CastList>
        {show?.Cast.length
          ? show.Cast.map(({ ID, Name }) => (
              <SC.CastListItem key={ID}>
                <h1>{ID}</h1>
                <h3>{Name}</h3>
              </SC.CastListItem>
            ))
          : null}
      </SC.CastList>
    </SC.CastTab>
  )
}

export default CastTab
