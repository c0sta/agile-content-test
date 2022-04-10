import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import * as SC from './styles'
import { Show } from '../../interfaces'
import { getOneShowService } from '../../services/shows/get-one'
import Seasons from '../Seasons'

const ShowContent: React.FC = () => {
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
      <Seasons />
    </SC.ShowContent>
  )
}

export default ShowContent
