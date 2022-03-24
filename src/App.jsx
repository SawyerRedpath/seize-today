import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeWaters } from './reducers/waterReducer'
import Waters from './components/Waters'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeWaters())
  }, [dispatch])

  return (
    <div>
      <Waters />
    </div>
  )
}

export default App
