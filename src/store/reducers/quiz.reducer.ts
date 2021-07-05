import * as actions from '../action-types/quiz.type'

export const initialState = {
  quizzes: [],
  loading: false,
  results: [],
}

const quizReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case actions.FETCH_QUIZ_REQUEST: {
      return { ...state, loading: true }
    }

    case actions.FETCH_QUIZ_SUCCESS: {
      return { ...state, quizzes: action.payload, loading: false }
    }

    case actions.FETCH_QUIZ_FAILED: {
      return { ...state, quizzes: [], loading: false }
    }

    case actions.ADD_RESULT: {
      return { ...state, results: [...state.results, action.payload] }
    }

    case actions.PLAY_AGAIN: {
      return { ...state, quizzes: [], loading: false, results: [] }
    }

    default:
      return state
  }
}

export default quizReducer
