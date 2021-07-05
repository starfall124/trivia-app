import { MainLayout } from '../../layouts'
import { HeaderText, NormalText, TextButton } from '../../components'

interface IHomePageProps {
  startQuiz: () => void
  loading: boolean
}
const HomePage: React.FC<IHomePageProps> = ({ startQuiz, loading }) => {
  return (
    <MainLayout>
      <div className="main__header">
        <HeaderText>Welcome to the Trivia Challenge!</HeaderText>
      </div>

      <div className="main__body">
        <NormalText paddingBottom={4}>
          You will be presented with 10 True or False questions.
        </NormalText>
        <NormalText>Can you score 100%?</NormalText>
      </div>

      <div className="main__footer">
        <TextButton color="primary" onClick={startQuiz} disabled={loading}>
          {loading ? 'LOADING...' : 'BEGIN'}
        </TextButton>
      </div>
    </MainLayout>
  )
}

export default HomePage
