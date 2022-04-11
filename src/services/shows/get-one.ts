import { AxiosResponse } from 'axios'
import api from '..'
import { Show } from '../../interfaces'

interface GetOneShowServiceProps {
  id: string
}

export const getOneShowService = async ({
  id,
}: GetOneShowServiceProps): Promise<AxiosResponse<Show>> =>
  api.get(`/tv-shows/${id}`)
