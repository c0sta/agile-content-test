import * as SC from './styles'
import NoContentIcon from '../../assets/icons/no-content.svg'

const NoContent: React.FC = () => {
  return (
    <SC.NoContentContainer>
      <SC.NoContentIcon src={NoContentIcon} />
      <SC.NoContentTitle>Nothing here, yet!</SC.NoContentTitle>
    </SC.NoContentContainer>
  )
}

export default NoContent
