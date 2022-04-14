import { useContext, useEffect } from 'react'
import Swal from 'sweetalert2'
import * as SC from './styles'
import { getOneShowService } from '../../services/shows/get-one'
import ShowSeasons from '../ShowSeasons'
import { ShowContext } from '../../context/show-context'
import OverlayLoading from '../ui/OverlayLoading'

const ShowContent: React.FC = () => {
  const { show, setShow, setOverlayLoading, overlayLoading } =
    useContext(ShowContext)

  const loadShowContent = () =>
    getOneShowService({ id: 'SHOW123.json' })
      .then(response => {
        setShow({ ...response.data })
      })
      .catch(error =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error}`,
        }),
      )
      .finally(() => setTimeout(() => setOverlayLoading(false), 1000))

  useEffect(() => {
    loadShowContent()
  }, [])

  return (
    <div>
      {overlayLoading ? (
        <OverlayLoading />
      ) : (
        <SC.ShowContent backgroundUrl={show?.Images.Background as string}>
          <SC.ShowContentHeader>
            <SC.ShowContentHeaderTitle>{show?.Title}</SC.ShowContentHeaderTitle>
            <SC.ShowContentHeaderDescription>
              {'80% Indicado / Terror / 2015 / EUA / 14'.toUpperCase()}
            </SC.ShowContentHeaderDescription>
          </SC.ShowContentHeader>
          <ShowSeasons />
        </SC.ShowContent>
      )}
    </div>
  )
}

export default ShowContent
