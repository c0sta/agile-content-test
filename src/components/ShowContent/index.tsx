import { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { ThreeDots } from 'react-loader-spinner'
import * as SC from './styles'
import { getOneShowService } from '../../services/shows/get-one'
import Seasons from '../Seasons'
import { ShowContext } from '../../context/show-context'

const ShowContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { show, setShow } = useContext(ShowContext)

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
      .finally(() => setIsLoading(false))

  useEffect(() => {
    loadShowContent()
  }, [])

  return (
    <div>
      {isLoading ? (
        <ThreeDots color="#2e754b" height={80} width={80} />
      ) : (
        <SC.ShowContent backgroundUrl={show?.Images.Background as string}>
          <SC.ShowContentHeader>
            <SC.ShowContentHeaderTitle>{show?.Title}</SC.ShowContentHeaderTitle>
            <SC.ShowContentHeaderDescription>
              {'80% Indicado / Terror / 2015 / EUA / 14'.toUpperCase()}
            </SC.ShowContentHeaderDescription>
          </SC.ShowContentHeader>
          <Seasons />
        </SC.ShowContent>
      )}
    </div>
  )
}

export default ShowContent
