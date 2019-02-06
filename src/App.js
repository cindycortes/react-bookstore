import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';


class App extends React.Component {

  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', { // takes two arguments, first the Url, second is the object
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID 56902a12749454684bb59e187ffbb5a308be21ea1d76a7efb0969890f93da9e4'

      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
