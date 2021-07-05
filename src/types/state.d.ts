import { IQuiz, IResult } from './quiz'

interface IState {
  quiz: {
    quizzes: IQuiz[]
    loading: false
    results: IResult[]
  }
}
