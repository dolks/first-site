import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import CardList from './components/CardList';

const API_KEY = 'AIzaSyBre0COb_sHpD89t596qVRNGVe9rLQ-Smg';

YTSearch({key: API_KEY, term: 'dogs'}, function(data){
  console.log(data);
});

class App extends Component {

  constructor(props){
    super(props);

    this.state = {allBreeds: [{name:'Coonhound', image: 'https://vetstreet.brightspotcdn.com/dims4/default/55e292f/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F55%2F39e8a0a72211e0a0d50050568d634f%2Ffile%2FBlack-and-Tan-Coonhound-4-380mk062311.jpg'}, {name:'German Shepherd', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Female_German_Shepherd.jpg/330px-Female_German_Shepherd.jpg'}, {name: 'Corgi', image: 'https://www.lebernard.ca/wp-content/uploads/2018/06/Welsh-corgi-pembroke.jpg'}],
      searchBreeds: [],
      searching: false};
  }

  searchBreeds(term){
    this.setState({searching: true});
    if (!term){
      window.alert("No results found.");
      this.setState({searching: false});
    }
    let currBreeds  = this.state.allBreeds;
    let newBreeds = [];
    term = term.toLowerCase();
    for (let i=0; i<currBreeds.length; i++){
      if(~currBreeds[i].name.toLowerCase().indexOf(term)){
        newBreeds.push(currBreeds[i]);
      } else {
        continue;
      } 
    };
    this.setState({searchBreeds: newBreeds});
    this.setState({searching: false});
    if (newBreeds.length === 0){
      window.alert("No results found.");
    }
  }

  render() {
    return (
      <div className='main-container'>
        <header className='site-title'>
          <p>
            DogDB
          </p>
        </header>
        <SearchBar loading={this.state.searching} onSearchPress={(term) => {this.searchBreeds(term)}}/>
        <CardList className='cardlist' breeds={this.state.searchBreeds.length===0? this.state.allBreeds : this.state.searchBreeds}/>
      </div>
    );
  }
}

export default App;
