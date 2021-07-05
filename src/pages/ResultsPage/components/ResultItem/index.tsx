import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import { NormalText } from '../../../../components'
import { IResult } from '../../../../types/quiz'

const StyledResultItemWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2em;
  color: grey;

  @media only screen and (max-width: 425px) {
    margin-bottom: 1em;
  }
`
const StyledResultItemIcon = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 425px) {
    width: 50px;
  }
`
const StyledResultItemQuestion = styled.div`
  width: calc(100% - 80px);

  @media only screen and (max-width: 425px) {
    width: calc(100% - 50px);
  }
`

interface IResultItemProps {
  result: IResult
}
const ResultItem: React.FC<IResultItemProps> = ({ result }) => {
  return (
    <StyledResultItemWrapper>
      <StyledResultItemIcon>
        <NormalText>{result.isCorrect ? '+' : '-'}</NormalText>
      </StyledResultItemIcon>
      <StyledResultItemQuestion>
        <NormalText>
          <ReactMarkdown>{result.question}</ReactMarkdown>
        </NormalText>
      </StyledResultItemQuestion>
    </StyledResultItemWrapper>
  )
}

export default ResultItem
