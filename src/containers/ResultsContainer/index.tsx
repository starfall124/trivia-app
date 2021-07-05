import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { ResultsPage } from '../../pages'
import { playAgain } from '../../store/actions'
import { IState } from '../../types/state'
import { paths } from '../../constants'

const ResultsContainer = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { quizzes, results } = useSelector((state: IState) => state.quiz)

  const score = useMemo(
    () => results.filter((result) => result.isCorrect).length,
    [results]
  )
  const countOfQuiz = quizzes.length

  const handlePlayAgain = () => {
    dispatch(playAgain())
    history.push(paths.HOME)
  }

  return (
    <ResultsPage
      score={score}
      countOfQuiz={countOfQuiz}
      results={results}
      handlePlayAgain={handlePlayAgain}
    />
  )
}

export default ResultsContainer
