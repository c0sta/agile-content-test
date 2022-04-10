import { useEffect, useState } from 'react'
import { getEpisodesByShowService } from '../../services/episodes/get-by-show'
import * as SC from './styles'
import CloseSearchIcon from '../../assets/icons/close-search-w.svg'
import { Season } from '../../interfaces'
import groupEpisodesBySeason from '../../helpers/group-episodes'

const Seasons = () => {
  const [seasons, setSeasons] = useState<Season[]>([])

  const loadEpisodes = () =>
    getEpisodesByShowService({ id: 'SHOW123.json' }).then(({ data }) => {
      const episodesBySeason = groupEpisodesBySeason(data)
      setSeasons(episodesBySeason)
    })

  useEffect(() => {
    loadEpisodes()
  }, [])
  return (
    <SC.Seasons>
      <SC.SeasonsHeader>
        <SC.CloseButton type="button">
          <img
            src={CloseSearchIcon}
            alt="Icone no formato de uma letra X, responsável por fechar a busca"
            height={25}
            width={25}
          />
        </SC.CloseButton>
      </SC.SeasonsHeader>
      <SC.SeasonsBody>
        {seasons.map(season => (
          <div>T{season.SeasonNumber}</div>
        ))}
      </SC.SeasonsBody>
    </SC.Seasons>
  )
}

export default Seasons

/**
 * Tabs component
 * 1 - Names of the tabs - Array<string>
 * 2 - hasIcon - Boolean
 * 3 - Icon - React.Component | null
 * OBS -> Tab size and borderBottom size must follow the TabName size
 * 4 - TabContent - React.Component
 */
