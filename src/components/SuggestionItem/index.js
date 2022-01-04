// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, onFullSuggestion} = props

  const onClickFullSuggestion = () => {
    onFullSuggestion(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-name">{suggestion}</p>
      <img
        className="arrow-image"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onClickFullSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
