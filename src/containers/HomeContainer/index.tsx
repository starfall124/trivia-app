import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { HomePage } from '../../pages'
import { fetchQuiz } from '../../store/actions'
import { paths } from '../../constants'
import { IState } from '../../types/state'

const HomeContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { loading } = useSelector((state: IState) => state.quiz)

  useEffect(() => {
    const params = {
      amount: 10,
      difficulty: 'hard',
      type: 'boolean',
    }
    dispatch(fetchQuiz(params))
  }, [dispatch])

  const startQuiz = () => {
    history.push(paths.QUIZ)
  }

  return <HomePage startQuiz={startQuiz} loading={loading} />
}

export default HomeContainer
