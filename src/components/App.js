import React,{Component} from 'react';
import MovieResults from "./Moviesresults"
class App extends Component{
  render(){
    return(
      <div className="container">
        <div className = "text-center">
        <div className="jumbotron">
  <h1>Movies-list</h1>
  <p>Your Movies!</p>
  </div>
</div>
<div className="row">
  <MovieResults/>
</div>
      </div>
    );
  }
}

export default App;