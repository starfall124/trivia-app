import { HeaderText, TextButton } from '../../components'
import { MainLayout } from '../../layouts'
import { IResult } from '../../types/quiz'
import { ResultItem } from './components'

interface IResultsPageProps {
  score: number
  countOfQuiz: number
  results: IResult[]
  handlePlayAgain: () => void
}
const ResultsPage: React.FC<IResultsPageProps> = ({
  score,
  countOfQuiz,
  results,
  handlePlayAgain,
}) => {
  return (
    <MainLayout>
      <div className="main__header">
        <HeaderText>
          You scored <br /> {score} / {countOfQuiz}
        </HeaderText>
      </div>

      <div className="main__body main__body--results">
        {results.map((result) => (
          <ResultItem key={result.id} result={result} />
        ))}
      </div>

      <div className="main__footer">
        <TextButton color="primary" onClick={handlePlayAgain}>
          PLAY AGAIN?
        </TextButton>
      </div>
    </MainLayout>
  )
}

export default ResultsPage
