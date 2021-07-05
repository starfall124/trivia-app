import { MainLayout } from '../../layouts'
import { HeaderText, TextButton } from '../../components'
import { IQuiz } from '../../types/quiz'
import { QuizBox } from './components'

interface IQuizPageProps {
  currentQuiz: IQuiz
  currentQuizIndex: number
  countOfQuiz: number
  handleQuestionAnswer: (answer: 'True' | 'False') => void
}
const QuizPage: React.FC<IQuizPageProps> = ({
  currentQuiz,
  currentQuizIndex,
  countOfQuiz,
  handleQuestionAnswer,
}) => {
  return (
    <MainLayout>
      <div className="main__header">
        <HeaderText>{currentQuiz.category}</HeaderText>
      </div>

      <div className="main__body">
        <QuizBox
          question={currentQuiz.question}
          currentQuizIndex={currentQuizIndex}
          countOfQuiz={countOfQuiz}
        />
      </div>

      <div className="main__footer">
        <TextButton color="green" onClick={() => handleQuestionAnswer('True')}>
          True
        </TextButton>
        <TextButton color="red" onClick={() => handleQuestionAnswer('False')}>
          False
        </TextButton>
      </div>
    </MainLayout>
  )
}

export default QuizPage
