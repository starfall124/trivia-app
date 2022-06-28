import styled from 'styled-components'

interface ITextButton {
  color: string
}
const TextButton = styled.button<ITextButton>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: 25px;
  line-height: 30px;
  border-radius: 4px;
  border: none;
  outline: 3px solid transparent;
  padding: 0.7em 1.5em;
  cursor: pointer;
  color: white;
  background-color: ${(props) =>
    props.color === 'primary'
      ? '#1991EB'
      : props.color === 'green'
      ? '#00b300'
      : props.color === 'red'
      ? '#f64747'
      : '#1991EB'};

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 425px) {
    font-size: 15px;
    line-height: 20px;
  }
`

export default TextButton
