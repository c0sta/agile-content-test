import { AxiosResponse } from 'axios'
import api from '..'
import { Episode } from '../../interfaces'

interface GetEpisodesByShowServiceProps {
  id: string
}

export const getEpisodesByShowService = async ({
  id,
}: GetEpisodesByShowServiceProps): Promise<AxiosResponse<Episode[]>> =>
  api.get(`/episodes/${id}`)
