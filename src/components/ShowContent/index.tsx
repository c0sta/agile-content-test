import { useEffect, useState } from 'react'
import { Show } from '../../interfaces'
import { getOneShowService } from '../../services/shows/get-one'
import * as SC from './styles'
import Swal from 'sweetalert2'

const ShowContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [show, setShow] = useState<Show | null>(null)

  const loadShowContent = () =>
    getOneShowService({ id: 'SHOW123.json' })
      .then(response => {
        setShow(response.data)
      })
      .catch(error =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error}`,
        }),
      )
      .finally(() => setTimeout(() => setIsLoading(false), 2000))

  useEffect(() => {
    loadShowContent()
  }, [])

  return (
    <SC.ShowContent backgroundUrl={show?.Images.Background as string}>
      <SC.ShowContentHeader>
        <SC.ShowContentHeaderTitle>{show?.Title}</SC.ShowContentHeaderTitle>
        <SC.ShowContentHeaderDescription>
          {'80% Indicado / Terror / 2015 / EUA / 14'.toUpperCase()}
        </SC.ShowContentHeaderDescription>
      </SC.ShowContentHeader>

      <div>Seasons tabs </div>
    </SC.ShowContent>
  )
}

export default ShowContent
