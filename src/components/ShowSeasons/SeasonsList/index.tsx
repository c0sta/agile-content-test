import { Episode } from '../../../interfaces'
import * as SC from './styles'
import PlayIcon from '../../../assets/icons/play-small-player-w.svg'

interface SeasonsListProps {
  episodes: Episode[]
}

const SeasonsList: React.FC<SeasonsListProps> = ({ episodes }) => {
  return (
    <SC.ShowSeasonsList>
      {episodes.map(episode => (
        <SC.ShowSeasonsItem>
          <SC.EpisodeDropdown>
            <SC.EpisodeTitleContainer>
              <SC.EpisodeTitle>
                <p>{episode.EpisodeNumber}</p>
                <p>{episode.Title}</p>
              </SC.EpisodeTitle>
              <img
                src={PlayIcon}
                height={30}
                width={30}
                alt="Icone que representa a função de reproduzir uma mídia"
              />
            </SC.EpisodeTitleContainer>
            <SC.EpisodeDescription>
              <img src={episode.Image} alt="Imagem do episódio" />
              <p style={{ color: '#fff' }}>{episode.Synopsis}</p>
            </SC.EpisodeDescription>
          </SC.EpisodeDropdown>
        </SC.ShowSeasonsItem>
      ))}
    </SC.ShowSeasonsList>
  )
}

export default SeasonsList
