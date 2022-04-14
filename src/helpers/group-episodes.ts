import { groupBy, isUndefined } from 'lodash'
import { Episode, Season } from '../interfaces'

const groupEpisodesBySeason = (episodes: Episode[]): Season[] => {
  const filteredEpisodes = episodes.filter(
    episode => episode !== null && !isUndefined(episode),
  )
  const groupedEpisodes = groupBy(filteredEpisodes, 'SeasonNumber')

  const formatedShowSeasons = Object.keys(groupedEpisodes).map(seasonKey => ({
    SeasonNumber: Number(seasonKey),
    Episodes: groupedEpisodes[seasonKey],
  }))

  return formatedShowSeasons
}

export default groupEpisodesBySeason
