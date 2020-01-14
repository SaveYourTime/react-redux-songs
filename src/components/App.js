import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

class App extends React.Component {
  render() {
    return (
      <div className="container" style={{ minHeight: '100vh' }}>
        <div className="card mb-3 mx-auto">
          <h5 className="card-header">React Songs</h5>
          <div className="row no-gutters">
            <div className="col-md-8">
              <SongList/>
            </div>
            <div className="col-md-4">
              <SongDetail/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
