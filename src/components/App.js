import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = term => {
    youtube
      .get('/search', {
        params: {
          q: term
        }
      })
      .then(response => {
        this.setState({ videos: response.data.items });
      });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
