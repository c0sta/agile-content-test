import { useContext } from 'react'
import * as SC from './styles'
import AddIcon from '../../../../assets/icons/add-gray-s.svg'
import SadIcon from '../../../../assets/icons/sad-gray-w.svg'
import PlayIcon from '../../../../assets/icons/rec-gray-s.svg'
import ShareIcon from '../../../../assets/icons/share-gray-s.svg'
import { ShowContext } from '../../../../context/show-context'

const GeneralTab: React.FC = () => {
  const { show } = useContext(ShowContext)

  return (
    <SC.GeneralTab>
      <SC.Actions>
        <SC.Action>
          <SC.ActionIcon
            src={AddIcon}
            alt="Icone com contorno e um simbolo de soma no centro"
          />
          <SC.ActionLabel>Minha lista</SC.ActionLabel>
        </SC.Action>
        <SC.Action>
          <SC.ActionIcon
            src={SadIcon}
            alt="Icone com um simbolo de triste no centro"
          />
          <SC.ActionLabel>Avaliar</SC.ActionLabel>
        </SC.Action>
        <SC.Action>
          <SC.ActionIcon
            src={PlayIcon}
            alt="Icone contendo um contorno redondo e um circulo pintado de branco no centro"
          />
          <SC.ActionLabel>Gravar</SC.ActionLabel>
        </SC.Action>
        <SC.Action>
          <SC.ActionIcon
            src={ShareIcon}
            alt="Icone contendo um contorno redondo e um circulo pintado de branco no centro"
          />
          <SC.ActionLabel>Compartilhar</SC.ActionLabel>
        </SC.Action>
      </SC.Actions>
      <SC.Synopsis>
        <h3>SINOPSE</h3>
        <p>{show?.Synopsis}</p>
      </SC.Synopsis>
    </SC.GeneralTab>
  )
}

export default GeneralTab
