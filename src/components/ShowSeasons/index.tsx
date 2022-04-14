import { useEffect, useState } from 'react'
import { getEpisodesByShowService } from '../../services/episodes/get-by-show'
import * as SC from './styles'
import CloseSearchIcon from '../../assets/icons/close-search-w.svg'
import { Season } from '../../interfaces'
import groupEpisodesBySeason from '../../helpers/group-episodes'
import Tabs from '../ui/Tabs'
import SeasonsList from './SeasonsList'

const ShowSeasons: React.FC = () => {
  const [showSeasons, setShowSeasons] = useState<Season[]>([])

  const loadEpisodes = () =>
    getEpisodesByShowService({ id: 'SHOW123.json' }).then(({ data }) => {
      const episodesBySeason = groupEpisodesBySeason(data)
      setShowSeasons(episodesBySeason)
    })

  const generateSeasonTabs = () =>
    showSeasons.map(season => ({
      title: `T${season.SeasonNumber}`,
      content: <SeasonsList episodes={season.Episodes} />,
    }))

  useEffect(() => {
    loadEpisodes()
  }, [])

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
        <Tabs tabs={generateSeasonTabs()} padding="8px 0px" />
      </SC.ShowSeasonsBody>
    </SC.ShowSeasons>
  )
}

export default ShowSeasons
