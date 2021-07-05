import styled from 'styled-components'

interface INormalText {
  paddingBottom?: number
}
const NormalText = styled.div<INormalText>`
  font-size: 25px;
  line-height: 30px;

  margin-bottom: ${(props) =>
    props.paddingBottom && `${props.paddingBottom}em`};

  @media only screen and (max-width: 425px) {
    font-size: 15px;
    line-height: 20px;
  }
`

export default NormalText
