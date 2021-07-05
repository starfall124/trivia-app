import { useMemo } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { HomeContainer, QuizContainer, ResultsContainer } from './containers'
import { paths } from './constants'
import { IState } from './types/state'

const Routes = () => {
  const { quizzes } = useSelector((state: IState) => state.quiz)

  const isCanStartQuiz = useMemo(() => {
    if (quizzes && quizzes.length > 0) {
      return true
    } else return false
  }, [quizzes])

  return (
    <Switch>
      {isCanStartQuiz ? (
        <>
          <Route exact path={paths.HOME} component={HomeContainer} />
          <Route exact path={paths.QUIZ} component={QuizContainer} />
          <Route exact path={paths.RESULTS} component={ResultsContainer} />
          <Redirect to={paths.HOME} />
        </>
      ) : (
        <>
          <Route path={paths.HOME} component={HomeContainer} />
          <Redirect to={paths.HOME} />
        </>
      )}
    </Switch>
  )
}

export default Routes
