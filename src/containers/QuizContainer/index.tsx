import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { QuizPage } from '../../pages'
import { IState } from '../../types/state'
import { paths } from '../../constants'
import { addResult } from '../../store/actions'

const QuizContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { quizzes } = useSelector((state: IState) => state.quiz)
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)

  const currentQuiz = quizzes[currentQuizIndex]
  const countOfQuiz = quizzes.length

  const handleQuestionAnswer = (answer: 'True' | 'False') => {
    const newResult = {
      id: uuidv4(),
      isCorrect: false,
      question: '',
    }

    if (answer === currentQuiz.correct_answer) {
      newResult.isCorrect = true
    } else if (currentQuiz.incorrect_answers.includes(answer)) {
      newResult.isCorrect = false
    }
    newResult.question = currentQuiz.question

    dispatch(addResult(newResult))

    if (currentQuizIndex < countOfQuiz - 1) {
      setCurrentQuizIndex((prev) => prev + 1)
    } else {
      history.push(paths.RESULTS)
    }
  }

  return (
    <QuizPage
      currentQuiz={currentQuiz}
      currentQuizIndex={currentQuizIndex}
      countOfQuiz={countOfQuiz}
      handleQuestionAnswer={handleQuestionAnswer}
    />
  )
}

export default QuizContainer
