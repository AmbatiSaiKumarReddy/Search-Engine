// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onFullSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toUpperCase().includes(searchInput.toUpperCase()),
    )

    return (
      <div className="google-suggestions-container">
        <img
          className="google-image"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="suggestion-container">
          <div className="input-container">
            <img
              className="input-image"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              className="input-text"
              type="search"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
          <ul className="suggestions-list">
            {filteredList.map(each => (
              <SuggestionItem
                key={each.id}
                suggestion={each.suggestion}
                onFullSuggestion={this.onFullSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
