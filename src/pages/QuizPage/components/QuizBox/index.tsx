import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import { NormalText } from '../../../../components'

const StyledQuizWrapper = styled.div`
  width: 100%;
`

const StyledQuizBox = styled.div`
  border: 1px solid grey;
  padding: 4em 2em;
  text-align: center;
  word-wrap: break-word;
  background-color: lightgrey;
`

const StyledPagination = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IQuizBoxProps {
  question: string
  currentQuizIndex: number
  countOfQuiz: number
}
const QuizBox: React.FC<IQuizBoxProps> = ({
  question,
  currentQuizIndex,
  countOfQuiz,
}) => {
  return (
    <StyledQuizWrapper>
      <StyledQuizBox>
        <NormalText>
          <ReactMarkdown>{question}</ReactMarkdown>
        </NormalText>
      </StyledQuizBox>
      <StyledPagination>
        <NormalText>
          {currentQuizIndex + 1} of {countOfQuiz}
        </NormalText>
      </StyledPagination>
    </StyledQuizWrapper>
  )
}

export default QuizBox
