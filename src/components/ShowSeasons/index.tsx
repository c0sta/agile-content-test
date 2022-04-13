import { useEffect, useState } from 'react'
import { getEpisodesByShowService } from '../../services/episodes/get-by-show'
import * as SC from './styles'
import CloseSearchIcon from '../../assets/icons/close-search-w.svg'
import PlayIcon from '../../assets/icons/play-small-player-w.svg'
import { Season } from '../../interfaces'
import groupEpisodesBySeason from '../../helpers/group-episodes'
import Tabs from '../ui/Tabs'

const ShowSeasons: React.FC = () => {
  const [showSeasons, setShowSeasons] = useState<Season[]>([])

  const loadEpisodes = () =>
    getEpisodesByShowService({ id: 'SHOW123.json' }).then(({ data }) => {
      const episodesBySeason = groupEpisodesBySeason(data)
      setShowSeasons(episodesBySeason)
    })

  useEffect(() => {
    loadEpisodes()
  }, [])

  const generateSeasonTabs = () =>
    showSeasons.map(season => ({
      title: `T${season.SeasonNumber}`,
      content: (
        <ul>
          {season.Episodes.map(episode => (
            <li>
              <div>
                <h1 style={{ color: '#fff' }}>{episode.Title}</h1>
                <img
                  src={PlayIcon}
                  height={25}
                  width={25}
                  alt="Icone que representa a função de reproduzir uma mídia"
                />
              </div>
              <details style={{ color: '#fff' }}>
                <div>
                  <img src={episode.Image} alt="Imagem do episódio" />
                  <p style={{ color: '#fff' }}>{episode.Synopsis}</p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      ),
    }))

  return (
    <SC.ShowSeasons>
      <SC.ShowSeasonsHeader>
        <SC.CloseButton type="button">
          <img
            src={CloseSearchIcon}
            alt="Icone no formato de uma letra X, responsável por fechar a busca"
            height={25}
            width={25}
          />
        </SC.CloseButton>
      </SC.ShowSeasonsHeader>
      <SC.ShowSeasonsBody>
        <Tabs tabs={generateSeasonTabs()} />
      </SC.ShowSeasonsBody>
    </SC.ShowSeasons>
  )
}

export default ShowSeasons
