import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import type {AppState} from '../store'
import {Title} from '../components'
import {Button} from '../theme/daisyui'
import * as L from '../store/loading'

export default function LoadingTest() {
  const dispatch = useDispatch()
  const loading = useSelector<AppState, L.State>(({loading}) => loading)

  const doTimeLoading = useCallback(() => {
    dispatch<any>(L.doTimeLoading(1000))
  }, [dispatch])

  return (
    <section className="mt-4">
      <Title>LoadingTest</Title>
      <div className="flex justify-center mt-4">
        <Button className="btn-sm btn-primary" onClick={doTimeLoading} disabled={loading}>
          do timed loading
        </Button>
        {loading && (
          <div className="flex items-center justify-center">
            <button className="btn btn-circle loading"></button>
          </div>
        )}
      </div>
    </section>
  )
}
