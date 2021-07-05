interface IQuizRequest {
  amount: number
  difficulty: string
  type: string
}

interface IQuiz {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

interface IResult {
  id: string
  isCorrect: boolean
  question: string
}

export { IQuizRequest, IQuiz, IResult }
