import { Dispatch } from 'redux'

import * as actions from '../action-types/quiz.type'
import { fetchQuizApi } from '../../apis'
import { IQuizRequest, IQuiz, IResult } from '../../types/quiz'

const fetchQuizRequest = () => ({
  type: actions.FETCH_QUIZ_REQUEST,
})
const fetchQuizSuccess = (data: IQuiz[]) => ({
  type: actions.FETCH_QUIZ_SUCCESS,
  payload: data,
})
const fetchQuizFailed = () => ({
  type: actions.FETCH_QUIZ_FAILED,
})

const fetchQuiz = (data: IQuizRequest) => {
  return async function (dispatch: Dispatch) {
    dispatch(fetchQuizRequest())

    try {
      const response = await fetchQuizApi(data)
      if (response.data.results && response.data.results.length > 0) {
        dispatch(fetchQuizSuccess(response.data.results))
      } else {
        dispatch(fetchQuizFailed())
      }
    } catch (err) {
      dispatch(fetchQuizFailed())
    }
  }
}

const addResult = (data: IResult) => ({
  type: actions.ADD_RESULT,
  payload: data,
})

const playAgain = () => ({
  type: actions.PLAY_AGAIN,
})

export { fetchQuiz, addResult, playAgain }
